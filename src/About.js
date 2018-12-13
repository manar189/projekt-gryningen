import React, { Component } from 'react';
import './App.css';

class About extends Component {

  constructor(props){
    super(props)
    this.backFunc = this.backFunc.bind(this)
    this.swingHatt = this.swingHatt.bind(this)
  }

  backFunc()
  {
    const prevPage = this.props.backFunc
    prevPage();
  }

  swingHatt()
  {

  }

  render() {

    return (
      <div>
      <div id="returnDiv">
      <i className="fas fa-chevron-circle-left" onClick={(b) => this.backFunc(b)}></i>
      </div>
      <div id = "aboutTextHeader">
        <h1>Om</h1>
      </div>
          <div id="aboutTextDiv">
             <p id="aboutText"> Bli en ovvemeister med OvveMeister! Ta reda på
             vilket program en student vid Linköpings Universitet läser via
             ovven den bär. Ta reda på:</p>

             <p id="aboutText">1. Ovvens färg</p>
             <p id="aboutText">2. Ovvens modell</p>
             <p id="aboutText">3. Ovvens revär (tygrämsan längs ovvens ben)</p>
             <p id="aboutText">4. Färdig!</p>

             <p id="aboutText">
             Tack Amanda Valkonen för ovve-illustrationerna!
             </p>
         </div>
         <div id="hattDiv">
         <img class="animated swing delay-0.5s" onClick={this.swingHatt} id="hatt" src="hatt.png"></img>
         </div>
      </div>
    );
  }
}

export default About;
