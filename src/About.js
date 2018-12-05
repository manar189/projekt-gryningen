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
          <img src ="images/arrow.svg" alt="Kunde inte ladda bilden" className="backButton" onClick={(b) => this.backFunc(b)}></img>
          <h1 id="colorTextHeader"> About </h1>
      </div>
    );
  }
}

export default About;
