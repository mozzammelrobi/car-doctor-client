import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const resetPassword =(email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth,email)
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentUse => {
            setUser(currentUse)
            // console.log('current user',currentUse)
            setLoading(false)
            // if user exist the issue a token
            if(currentUse){
                const loggedUser = {email: currentUse.email}
                axios.post('https://car-doctor-server-xi-plum.vercel.app/jwt', loggedUser, {withCredentials:true})
                .then(res => {
                    console.log('token response', res.data)
                })
            }
        })
        return () => {
            return unsubcribe()
        }
    }, [])

    const authInfo = {
        createUser,
        signIn,
        logOut,
        resetPassword,
        user,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;