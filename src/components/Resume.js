import React from 'react';
import './resume.css';

function Resume(){
    return(
        <div>
            <section className="exp-pro">
                <div>
                    <h1>Experience Professionnel</h1>
                    <hr></hr>
                </div>
                <div className="container-card">
                    <div className="card">
                        <div>
                            <div className="card-head">
                                <h3>stage Ingenieur</h3>
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
                                Technologies utilisees : FastAPI , Python , Flutter , MongoDB , SQLite ,
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
                                <li>Etude et déploiement de la solution open source de gestion des identités et d’accès(KeyCloack) sur un cluster Kubernetes </li>
                            </ul>
                            <span>
                                Technologies utilisees : KeyCloack, Devstack, management de projet
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
                                <li>Apprentissage de la programmation réactive en dart et le ges-
tionnaire d’etat Bloc</li>
                            </ul>
                            <span>
                                Technologies utilisees : UML, HTML5, CSS3
                            </span>
                        </div>

                    </div>
                </div>
            </section>
            <section className="exp-pro">
                <div>
                    <h1>Education</h1>
                    <hr></hr>
                </div>
                <div className="container-card">
                    <div className="card">
                        <div>
                            <div className="card-head">
                                <h3>Ingenieur Reseaux & Telecommunication</h3>
                                <p> 2017 - 2022 <b>(en cour)</b></p>
                            </div>
                            <div>
                                <em>Ecole National Superieure Polytchenique de Maroua</em>
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
                                <em>Lycee De Bafang Rural</em>
                            </div>
                        </div>
                    </div>

                </div>
            
            </section>
        </div>
    );
}

export default Resume;