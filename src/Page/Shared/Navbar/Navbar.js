import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assest/logo/Bike logo.jpg'

const Navbar = () => {

    const menuItem =
    <React.Fragment>
        <li><Link to="/" className='rounded-full'>Home</Link></li>
        <li><Link to="/" className='rounded-full'>Blog</Link></li>
        <li><Link to="/login" className='rounded-full'>Login</Link></li>

        {/* {user?.uid ?
            <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><button onClick={handleLogOut}>Sign Out</button></li>
            </>
            :
            <li><Link to="/login">Login</Link></li>} */}
    </React.Fragment>
    return (
        <div className="navbar bg-base-300 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact  dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                
                <div className='flex items-center gap-3 ml-4'>
                    <img src={logo} alt="" className='rounded-full' style={{height:40, width: 40}}/>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">Bike Lagbe</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;