import React from 'react';
import { NavLink } from 'react-router-dom';
import './Headers.css';

function Headers(){
    return (
        <div className="head">
            <nav >
                <ul className="navigation" role="navigation">
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/Resume">Resume</NavLink></li>
                    <li><NavLink to="/Publications">Publications</NavLink></li>
                    <li><NavLink to="/Projects">Projects</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                </ul>
            </nav>
           
        </div>
    );
}

export default Headers;