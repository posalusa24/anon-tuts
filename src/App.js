import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import motherland from "./images/motherland.png"
import ggsong from "./images/ggsong.mp3"

export default function App(){
  return (
    <div>
      <Header />
      <img className="myanmarKwa--img" src={motherland}/>   
      <div className="myanmarKwa--content">  
        <h1 className="myanmarKwa--text">Made in Myanmar</h1>
        <h3>Please play at least 30sec for Patriotism</h3> 
        <audio controls>
          <source src={ggsong} type="audio/mpeg"/>
        </audio>
      </div>
      <Footer />
    </div>
  )
}