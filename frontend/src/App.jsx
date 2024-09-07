import React from "react";
import Game from "./components/Game";
import "./App.css";

function App() {
  return (
    <div className="App">
      
      <video autoPlay loop muted className="background-video">
        <source
          src="/istockphoto-1341300281-640_adpp_is.mp4"  
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      
      <div className="content">
        <h1>Ocean Literacy Game</h1>
        <Game />
      </div>
    </div>
  );
}

export default App;
