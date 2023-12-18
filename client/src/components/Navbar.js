import { Link } from 'react-router-dom';
import logo from '../static/assets/logo.png';
import '../static/styles/navbar.css';
import '../App.css';
import React from 'react';
let logged = true;

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="logo" width={30} />Notes
                </div>
                <ul className="links">
                {logged ? (
                    <>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/create">Create</Link></li>
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