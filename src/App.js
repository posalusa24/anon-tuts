import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import motherland from "./images/motherland.png"

export default function App(){
  return (
    <div>
      <Header />
      <img className="myanmarKwa--img" src={motherland}/>   
      <div className="myanmarKwa--content">  
        <h1 className="myanmarKwa--text">Made in Myanmar</h1>
        <h3>Please play at least 60sec for Patriotism</h3> 
        <iframe width="560" height="315" src="https://www.youtube.com/embed/UhIpxANr2vo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <Footer />
    </div>
  )
}