import React from 'react';
import './resume.css';

function Resume(){
    return(
        <div>
            <section className="exp-pro">
                <div>
                    <h1>Expérience Professionnelle</h1>
                    <hr></hr>
                </div>
                <div className="container-card">

                <div className="card">
                        <div>
                            <div className="card-head">
                                <h3>Python Backend Developer</h3>
                                <p>juin 2023 - présent</p>
                            </div>
                            <div>
                                <em>SAMANI ENGINEERING</em>
                            </div>


                        </div>
                        <div>
                            <ul>
                                <li>Développement backend d'une application de signature digitale</li>
                                <li>User Service</li>
                                <li>Signature service</li>
                                <li>Verification service</li>
                            </ul>
                            <span>
                            Technologies utilisées : FastAPI , Python , Flutter , PostgreSQL
                            </span>
                        </div>

                    </div>
                    <div className="card">
                        <div>
                            <div className="card-head">
                                <h3>stage Ingénieur | Full Stack Developer</h3>
                                <p>fev 2022 - jun 2022</p>
                            </div>
                            <div>
                                <em>Astor Digitech | Stage</em>
                            </div>


                        </div>
                        <div>
                            <ul>
                                <li>Développement d’une application mobile de drive test des
réseaux d’opérateurs</li>
                                <li>Développement d’une API pour collecter les données récupérées 
                                    par l’application mobile</li>
                            </ul>
                            <span>
                            Technologies utilisées : FastAPI , Python , Flutter , MongoDB , SQLite ,
Heroku , Dart , Reactive programming
                            </span>
                        </div>

                    </div>

                    <div className="card">
                        <div>
                            <div className="card-head">
                                <h3>Stagiaire Ingenieur Projet</h3>
                                <p>June 2020 - Aug. 2020</p>
                            </div>
                            <div>
                                <em>Astor Protect | Stage</em>
                            </div>
                            

                        </div>
                        <div>
                            <ul>
                                <li>Étude et déploiement d’un IaaS(devstack)</li>
                                <li>Analyse, modélisation de plusieurs projets de développement</li>
                                <li>Étude et déploiement de la solution open source de gestion des identités et d’accès(KeyCloack) sur un cluster Kubernetes </li>
                            </ul>
                            <span>
                            Technologies utilisées : KeyCloack, Devstack, Management de projet
                            </span>
                        </div>

                    </div>
                    <div className="card">
                        <div>
                            <div className="card-head">
                                <h3>Stagiaire développeur web</h3>
                                <p>June 2020 - Aug. 2020</p>
                            </div>
                            <div>
                                <em>Flysoft Enginering | Stage</em>
                            </div>
                        </div>
                        <div>
                            <ul>
                                <li>Développement des sites en HTML5, CSS3, Javascript</li>
                                <li>Analyse et Modélisation d’un projet avec UML</li>
                                <li>Apprentissage de la programmation réactive en dart et le gestionnaire d’etat Bloc</li>
                            </ul>
                            <span>
                                Technologies utilisées : UML, HTML5, CSS3
                            </span>
                        </div>

                    </div>
                </div>
            </section>
            <section className="exp-pro">
                <div>
                    <h1>Éducation</h1>
                    <hr></hr>
                </div>
                <div className="container-card">
                    <div className="card">
                        <div>
                            <div className="card-head">
                                <h3>Ingénieur Réseaux & Télécommunication</h3>
                                <p> 2017 - 2022 </p>
                            </div>
                            <div>
                                <em>École Nationale Supérieure Polytechnique de Maroua</em>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div>
                            <div className="card-head">
                                <div>
                                    <h3>Baccalaureat C</h3>
                                </div>
                                <div>
                                    <p> 2016 - 2017</p>
                                </div>
                                
                                
                            </div>
                            <div>
                                <em>Lycée De Bafang Rural</em>
                            </div>
                        </div>
                    </div>

                </div>
            
            </section>
        </div>
    );
}

export default Resume;