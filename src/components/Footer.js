import React from "react";
import facebookIcon from "../images/facebook.png";
import twitterIcon from "../images/twitter.png";
import discordIcon from "../images/discord.png";
import githubIcon from "../images/github.png";

export default function Footer(){
    return(
        <div className="footer">
            <h1 className="footer--title">TUTORIAL</h1>
            <p>We create possibilities<br/>for the connected world.</p>
            <div className="footer--img">
                <img src={facebookIcon}/>
                <img src={twitterIcon}/>
                <img src={discordIcon}/>
                <img src={githubIcon}/>
            </div>
            <p>All rights reserved 2022.</p>
        </div>
    )
}
