import { Link } from 'react-router-dom';
import logo from '../static/assets/logo.png';
import '../static/styles/navbar.css';
import '../App.css';
import React from 'react';
let logged = false;

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="logo" width={30} />Todo
                </div>
                <ul className="links">
                {logged ? (
                    <>
                        <li><Link to="/create">Create New</Link></li>
                        <li><Link to="/logout">Log out</Link></li>
                    </>
                    ) : (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </>
                    )}
                </ul>
            </div>
            <div className="line"></div>
        </>
    );
}



export default Navbar;