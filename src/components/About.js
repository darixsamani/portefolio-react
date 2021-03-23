import React from 'react';
import Profil from './images/profil.png';
import list_tools from './list_tools';
function About(){
    return (
        <div>
            <img src={Profil} width="300px" alt="profil"/>
            <div>
                <h1> Darix SAMANI SIEWE</h1>
                <h3> INGERIEUR EN RESEAU ET TELECOMMUNICATION</h3>
            </div>
            <div>
                <Tools />
            </div>
        </div>
    );
}

function Tools(){
    
    return (
        <div>
            <ul>
                list_tools.map
            </ul>
        </div>
    );
}
export default About;