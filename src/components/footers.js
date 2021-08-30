import {Link} from "react-router-dom";
import React from "react";

function Footer(){


    return (
        <div className="footers">
            <Link to={{ pathname: "https://github.com/darixsmani" }} target="_blank" />
            <p>Design by <Link to={{ pathname: "https://github.com/darixsamani" }} target="_blank" > @darixsamani </Link></p>

        </div>
    )
}

export default Footer;