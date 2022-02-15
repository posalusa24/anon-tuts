import React from "react"

export default function Header(){
    return (
        <header>
            <h1 className="header--title">Myo Gyi Fan Page</h1>
            <div className="header--nav">
                <a href="#" className="header--home"><p>Home</p></a>
                <div className="header--verticleLine"></div>
                <a href="#" className="header--about"><p>About</p></a>
            </div>
           
        </header>
    )
}