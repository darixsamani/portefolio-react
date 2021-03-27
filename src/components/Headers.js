import React from 'react';
import { Link } from 'react-router-dom';
import './Headers.css';

function Headers(){
    return (
        <div className="head">
            <nav className="nav-mobile">

            </nav>
            <nav className="nav-desktop">
                <ul>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Resume">Resume</Link></li>
                    <li><Link to="/Publications">Publications</Link></li>
                </ul>
            </nav>
           
        </div>
    );
}

export default Headers;