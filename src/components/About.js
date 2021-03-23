import React from 'react';
import Profil from './images/profil.png';


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
    
    const list_tools = ['Reacts','Flutter','HTML5','CSS3','JavaScripts','C/C++','Dart','Pharo','Docker','GNS3','Python','Django','Flask','Numpy','Scipy','Tensorflow','Matplotlib','Pandas']

    const tool = list_tools.map((t)=>(<li key={t.toString}>{t}</li>))
    return (
        <div className="tools">
            <ul>
                {tool}
            </ul>
        </div>
    );
}
export default About;