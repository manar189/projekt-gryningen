import React, { Component } from 'react';
import './App.css';

class About extends Component {

  constructor(props){
    super(props)
    this.backFunc = this.backFunc.bind(this)
  }

  backFunc()
  {
    const prevPage = this.props.backFunc
    prevPage();
  }

  render() {

    return (
      <div>
      <div id="returnDiv">
      <i className="fas fa-chevron-circle-left" onClick={(b) => this.backFunc(b)}></i>
      </div>
      <div id = "startTextHeader">
        <h1>Om</h1>
      </div>
          <div id="aboutTextDiv">
             <p id="aboutText"> Året var 1944. Trupperna från öst hade lanserat en ny attack
             natten till den 14:e augusti. Ove Bergvall( alias Ovve) utgjorde kommandot
             över 3:e bataljonen. I denna befann sig insatsstyrkan Gryningen,
             ett topphemligt projekt uträttat av brittiska veganer 5 år tidigare.
             Brümmer, den mest ökända av alla tyska generaler, skickade gryningen 74 år
             in i framtiden. För att återvända till sin tid och vinna slaget måste
             Gryningen utföra ett KOMA-projekt utan dess like.
             </p>
             <p id="aboutText">
             Tack Amanda Valkonen för ovve-illustrationerna!
             </p>
         </div>
         <img class="animated swing delay-0.5s" id="hatt" src="hatt.png"></img>
      </div>
    );
  }
}

export default About;
