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
      </div>             
      <h1 id="colorTextHeader"> About </h1>
      </div>
    );
  }
}

export default About;
