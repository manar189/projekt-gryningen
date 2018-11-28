import React, { Component } from 'react';
import './App.css';


class Result extends Component {

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
    const data = this.props.data; //vår valda ovve


    return (
      <div>
      <div className="backButton" onClick={(b) => this.backFunc(b)}></div>
        <h1> Resulat </h1>

        <h1> {data.prog} </h1>
      </div>
    );
  }
}

export default Result;
