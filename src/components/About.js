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
                    <em> INGERIEUR EN RESEAU ET TELECOMMUNICATION</em>
                </div>
            </div>
            <section className="about-pre">
                <div>
                    <h2>About Me</h2>
                </div>
                <div>
                    <p>
                    I am a Computer Scientist who like to create innovative solutions.<br/>
                    Interested in <b>Data Science</b>, <b>Internet Of Things</b>(IOT), <b>cybersecurity</b>, <b>embedded systems </b>and <b>Software Development</b>

                    </p>

                </div>
                
            </section>
            <section >
                <div style={{marginTop:"50px"}}> 
                    <h2>Tools</h2>
                </div>
                <div className="tools">
                    <div >
                        <h3>Programming Languages </h3>
                        <ul>
                            <li>Python</li>
                            <li>Typescript</li>
                            <li>Golang</li>
                            <li>Pharo</li>
                            <li>Dart</li>
                            <li>C/C++</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Web Frameworks </h3>
                        <ul>
                            <li>Django</li>
                            <li>Express.js</li>
                            <li>Flask</li>
                            <li>Spring boot</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3> Databases </h3>
                        <ul>
                            <li>PostgreSQL</li>
                            <li>Mongodb</li>
                            <li>Redis</li>
                            <li>Neo4j</li>
                            <li>Cassandra</li>
                            <li>BaseX</li>
                        </ul>
                    </div>
                    <div>
                        <h3> DevOps </h3>
                        <ul>
                            <li>Docker</li>
                            <li>Shell/Bash/Zsh</li>
                            <li>Git</li>
                            <li>Amazon Web Service</li>
                        </ul>
                    </div>
                </div>
                </section>
                
            <div>
                <div class="loader">Chargement...</div>
                {/* <Tools /> */}
            </div>
        </div>
    );
}

// function Tools(){
    
//     const list_tools = ['Reacts','Flutter','HTML5','CSS3','JavaScripts','C/C++','Dart','Pharo','Docker','GNS3','Python','Django','Flask','Numpy','Scipy','Tensorflow','Matplotlib','Pandas']

//     const tool = list_tools.map((t)=>(<li key={t.toString}>{t}</li>))
//     return (
//         <div className="tools">
//             <ul>
//                 {tool}
//             </ul>
//         </div>
//     );
// }
export default About;