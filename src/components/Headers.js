import React from 'react';
import { NavLink } from 'react-router-dom';
import './Headers.css';
import Profil from './images/moi.png';
import {Link} from "react-router-dom";

function Headers(){
    return (
        <div className="head">

            <Link to="/"><img src={Profil} height={"100px"} width={"100px"} alt="profil"/></Link>

            <nav>
                <ul className="navigation" role="navigation">
                    <li><NavLink to="/#About">About</NavLink></li>
                    {/* <li><NavLink to="/resume">Resume</NavLink></li> */}
                    <li><NavLink to="/projects">Projets</NavLink></li>
            
                </ul>
            </nav>
           
        </div>
    );
}

export default Headers;