import React from "react";
import facebookIcon from "../images/facebook.png";
import twitterIcon from "../images/twitter.png";
import discordIcon from "../images/discord.png";
import githubIcon from "../images/github.png";

export default function Footer(){
    return(
        <div className="footer">
            <div className="footer--content">
                <div>
                    <h1 className="footer--title">TUTORIAL</h1>
                    <p>We create possibilities<br/>for the connected world.</p>
                    <div className="footer--img">
                        <a href="https://www.facebook.com/myintmyataung173"><img className="footer--icon" src={facebookIcon}/></a>
                        <a href="https://twitter.com/chadgelina"><img className="footer--icon" src={twitterIcon}/></a>
                        <a href="https://discord.gg/sNRJRbEAgd"><img className="footer--icon" src={discordIcon}/></a>
                        <a href="https://github.com/posalusa24/anon-tuts"><img className="footer--icon" src={githubIcon}/></a>
                    </div>
                    <p className="footer--copyright">All rights reserved 2022.</p>
                </div>
                <div className="footer--nav">
                    <a href="#" className="footer--home"><p>Home</p></a>
                    <div className="header--verticleLine"></div>
                    <a href="#" className="footer--about"><p>About</p></a>
                </div>
            </div>
        </div>
    )
}
