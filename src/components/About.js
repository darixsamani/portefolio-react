import React from 'react';
import Profil from './images/profil.png';
import './About.css';
import * as FaIcons from "react-icons/fa";

function About(){
    return (
        <div className="about-main">
            <div className="about-head">
                <div>
                    <img src={Profil} width="200px" alt="profil"/>
                </div>
                <div>
                    <h2> Darix SAMANI</h2>
                    <em> Networks and Telecommunications Engineer  | junior Software Engineer</em>
                </div>
                <div className="social_network">
                    <a href = "https://www.linkedin.com/in/darix-samani">
                        <FaIcons.FaTwitter />
                    </a>
                    <a href = "https://www.linkedin.com/in/darix-samani">
                        <FaIcons.FaLinkedinIn />
                    </a>

                    <a href='https:www.github.com/darixsamani'>
                        <FaIcons.FaGithub />
                    </a>
                </div>
            </div>
            <section className="about-pre">
                <div className="titre-about">
                    <h2 >About Me</h2>
                </div>
                <div className="about-me">
                    <p>
                    I am a Computer Engineer who like to create innovative solutions.<br/>
                    Interested in <b>Data Science</b>, <b>Internet Of Things</b>(IOT), <b>Cybersecurity</b>, <b>Cloud Computing</b>, <b>Embedded Systems </b> and <b>Software Development</b>

                    </p>

                </div>
                
            </section>
            <section >
                <div style={{marginTop:"50px"}}> 
                    <h2>Tools & Technologies</h2>
                </div>
                <div className="tools">
                    <div >
                        <h3>Programming Languages </h3>
                        <ul>
                            <li>Python</li>
                            <li>Javascript</li>
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
                            <li>FastAPI</li>
                            <li>Flutter</li>
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
                            <li>SQLite</li>
                        </ul>
                    </div>
                    <div>
                        <h3> DevOps </h3>
                        <ul>
                            <li>Docker</li>
                            <li>Shell/Bash/Zsh</li>
                            <li>Git</li>
                            <li>CI/CD</li>
                            <li>OpenStack</li>
                            <li>Kubernete</li>
                        </ul>
                    </div>
                </div>
                </section>

                <section style={{marginTop:"50px"}}>
                    <div style={{marginBottom:"40px"}}>
                        <h2>WHAT I DO</h2>
                    </div>
                    <div className="whatido">
                        <div className="card-about">
                            <div>

                            </div>
                            <div>
                                <h3>Competive  Programmer</h3>
                            </div>
                            <div>
                                <p>
                                    I am a Competive Programmer with handles on online judges: Hackerrank, Tryhackme
                                    .i have recently passed <b>Turing test</b> and <b>Linkedin test</b> in Python Language.
                                </p>
                            </div>
                        </div>

                        <div className="card-about">
                            <div>

                            </div>
                            <div>
                                <h3>Full Stack Developer</h3>
                            </div>
                            <div>
                                <p>
                                    I am familiar and experienced in tech stack.
                                    ReactJs, FastAPI, Flutter etc...
                                </p>
                            </div>
                        </div>

                        <div className="card-about">
                            <div>

                            </div>
                            <div>
                                <h3>Data Science</h3>
                            </div>
                            <div>
                                <p>
                                    I have working experience in Machine Learning, Deep learning(Computer Vision) and Natural Language Processing.
                                    Check out my work under Project section
                                </p>
                            </div>
                        </div>

                        <div className="card-about">
                            <div>

                            </div>
                            <div>
                                <h3>Technical Writer</h3>
                            </div>
                            <div>
                                <p>
                                    I wrote Technical articles for 
                                </p>
                            </div>
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


export default About;