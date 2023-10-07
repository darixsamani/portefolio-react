import React from 'react';
import Profil from './images/profil.png';
import './Home.css';
import * as FaIcons from "react-icons/fa";

import {BiWorld} from "react-icons/bi" ;
import { IconContext } from "react-icons";
import {whatido, tools} from "./datas"

function Home(){
    return (
        <div className="about-main">
            <div className="about-head">
                <div>
                    <img src={Profil} width="200px" height="200px" alt="profil"/>
                </div>
                <div>
                    <h2> Darix SAMANI</h2>
                    {/* <em>junior Software Engineer</em> */}
                </div>
                <div className="social_network">

                    <IconContext.Provider value = {{size: '35px'}}>
                    <a href = "https://www.linkedin.com/in/darix-samani">
                        <FaIcons.FaLinkedinIn />
                    </a>

                    <a href="https://www.github.com/darixsamani">
                        <FaIcons.FaGithub />
                    </a>

                    <a href='https://www.hackerrank.com/darix15'>
                        <FaIcons.FaHackerrank />
                    </a>
                    <a href='http://bit.ly/3rcU3Cd'>
                        < BiWorld />
                    </a>

                    </IconContext.Provider>
                    
                </div>
            </div>
            
            <section >
                <div style={{marginTop:"50px"}}> 
                    <h2>Tools & Technologies</h2>
                </div>
                <div className="tools">

                    {
                        tools.map((element, i) => {

                        return (
                        <div key={i}>
                            <h3>{element.name}</h3>
                                <ul>
                                    {element.items.map((elm, j) => {
                                        
                                        return ( <li key={j}>{elm}</li>)
                                    })
                                    }
                                </ul>
                        </div>
                        )

                            

                    })}
                </div>
                </section>

                <section style={{marginTop:"50px"}}>
                    <div style={{marginBottom:"40px"}}>
                        <h2>WHAT I DO</h2>
                    </div>
                    <div className="whatido">
        
                        {whatido.map((element, index) =>{
                            return (
                            <div className="card-about" key={index}>
                                <div>

                                </div>
                                <div>
                                    <h3>{element.title}</h3>
                                </div>
                                <div>
                                    <p>
                                        {element.content}
                                    </p>
                                </div>
                            </div>
                            )
                        })}
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