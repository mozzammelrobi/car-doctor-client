import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .then(error => console.log(error))

    }

    const NavItems = <>
        <NavLink to='/' className={({ isActive }) => isActive ? 'font-bold text-orange-500' : 'font-bold'}>Home</NavLink>
        <NavLink to='/' className={({ isActive }) => isActive ? 'font-bold text-orange-500' : 'font-bold'}>About</NavLink>
        <NavLink to='/' className={({ isActive }) => isActive ? 'font-bold text-orange-500' : 'font-bold'}>Services</NavLink>
        <NavLink to='/' className={({ isActive }) => isActive ? 'font-bold text-orange-500' : 'font-bold'}>Blog</NavLink>
        <NavLink to='/' className={({ isActive }) => isActive ? 'font-bold text-orange-500' : 'font-bold'}>Contact</NavLink>
        {
            user?.email ? <button onClick={handleLogOut}>LogOut</button>
                : <NavLink to='/login' className={({ isActive }) => isActive ? 'font-bold text-orange-500' : 'font-bold'}>Login</NavLink>
        }
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex">
                        {NavItems}
                    </ul>
                </div>
                <Link to='/' className="cursor-pointer">
                    <img className="w-12" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-3">
                    {NavItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline btn-warning">Apponintment</a>
            </div>
        </div>
    );
};

export default NavBar;