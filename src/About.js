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
        <i class="fas fa-chevron-circle-left" onClick={(b) => this.backFunc(b)}></i>
          <h1 id="colorTextHeader"> Info </h1>
          <div  id="aboutText">
             <p> Året var 1944. Trupperna från öst hade lanserat en ny attack
             natten till den 14:e augusti. Ove Bergvall( alias Ovve) utgjorde kommandot
             över 3:e bataljonen. I denna befann sig insattsstyrkan Gryningen,
             ett topphemligt projekt uträttat av brittiska veganer 5 år tidigare.
             Brümmer, den mest ökända av alla tyska generaler, skickade gryningen 74 år
             in i framtiden. För att återvända till sin tid och vinna slaget måste
             Gryningen utföra ett KOMA-projekt utan dess like.
             </p>
         </div>
      </div>
      </div>
    );
  }
}

export default About;
