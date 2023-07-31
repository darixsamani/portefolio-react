import React from 'react';
import { NavLink } from 'react-router-dom';
import './Headers.css';
import Profil from './images/profil.png';
import {Link} from "react-router-dom";

function Headers(){
    return (
        <div className="head">

            <Link to="/"><img src={Profil} width="200px" alt="profil"/></Link>

            <nav>
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