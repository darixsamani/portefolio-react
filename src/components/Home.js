import React from 'react';
import Profil from './images/profil.png';
import './Home.css';
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons";

function Home(){
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

                    <IconContext.Provider value = {{size: '35px'}}>
                    <a href = "https://www.linkedin.com/in/darix-samani">
                        <FaIcons.FaTwitter />
                    </a>
                    <a href = "https://www.linkedin.com/in/darix-samani">
                        <FaIcons.FaLinkedinIn />
                    </a>

                    <a href='https:www.github.com/darixsamani'>
                        <FaIcons.FaGithub />
                    </a>

                    <a href='https://www.hackerrank.com/darix15'>
                        <FaIcons.FaHackerrank />
                    </a>

                    </IconContext.Provider>
                    
                </div>
            </div>
            <section className="about-pre" id='ABOUT'>
                <div className="titre-about">
                    <h2 >About Me</h2>
                </div>
                <div className="about-me">
                    <p>
                    I'm passionate about programming, and I'm always eager to learn new technologies 
                    and techniques to enhance my skills. I'm excited to work on challenging projects 
                    and contribute to the development of innovative software solutions.

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
                            <li>Kubernetes</li>
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
                                    I am a Competive Programmer with handles on online judges: HackerRank, Tryhackme, CodeWars                                </p>
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


export default Home;