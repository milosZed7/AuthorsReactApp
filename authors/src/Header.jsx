import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">
                <img src={logo} alt="" width="75px" />
            </Link>
            <div className="navbar-nav" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link" to="/authors">
                            Authors
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
