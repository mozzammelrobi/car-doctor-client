import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    useEffect(()=> {
       const unsubcribe = onAuthStateChanged(auth, currentUse => {
                setUser(currentUse)
                console.log(currentUse)
                setLoading(false)
        })
        return () => {
            return unsubcribe()
        }
    },[])

    const authInfo = {
        createUser,
        signIn,
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