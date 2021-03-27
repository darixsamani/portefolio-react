import React from 'react';
import Profil from './images/profil.png';
import './About.css';

function About(){
    return (
        <div className="about-main">
            <div className="about-head">
                <div>
                    <img src={Profil} width="200px" alt="profil"/>
                </div>
                <div>
                    <h2> Darix SAMANI SIEWE</h2>
                    <span> INGERIEUR EN RESEAU ET TELECOMMUNICATION</span>
                </div>
            </div>
            <div className="about-pre">
                <p>
                    n'import quoi ici juste pour le fun. n'import quoi ici juste pour le fun
                    n'import quoi ici juste pour le fun
                    n'import quoi ici juste pour le fun n'import quoi ici juste pour le fun.n'import quoi ici juste pour le funn'import quoi ici juste pour le funn'import quoi ici juste pour le fun
                    n'import quoi ici juste pour le funn'import quoi ici juste pour le funn'import quoi ici juste pour le fun

                </p>
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