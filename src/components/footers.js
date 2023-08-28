import {Link} from "react-router-dom";
import React from "react";
import "./footers.css"
function Footer(){


    return (
        <div className="footers" style={{backgroundColor: "#1e4c7a"}}>
            
            <p>Design by <Link to={{ pathname: "https://github.com/darixsamani" }} target="_blank" > @darixsamani </Link></p>

        </div>
    )
}

export default Footer;