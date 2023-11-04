import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo1 from "../../../assets/images/banner/7.jpg"
import { AuthContext } from '../../../Providers/AuthProviders';
import useAuth from '../../../Hooks/useAuth';

const NavBar = () => {

    const { user, logOut } = useAuth();
    // const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }


    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        {
            user?.email ? <>
                <li><NavLink to="/assignments">Assignments</NavLink></li>
                <li><NavLink to="/myAssignments">My Assignments</NavLink></li>
                <li><NavLink to="/createAssignments"> create assignments</NavLink></li>
                <li><button onClick={handleLogOut} >logOut</button></li>
            </> : <li><NavLink to="/login">Login</NavLink></li>

        }

    </>
    return (
        <div className="navbar bg-base-100 h-24">
            <div className="navbar-start flex items-center">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-sm btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to="/" className=" normal-case text-xl w-20"><img className='w-16 rounded-full' src={logo1} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <><NavLink to="/profile">profile</NavLink></>
            </div>
        </div>
    );
};

export default NavBar;