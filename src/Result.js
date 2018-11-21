import React, { Component } from 'react';
import './App.css';


class Result extends Component {

  constructor(props){
    super(props)

  }


  render() {
    const data = this.props.data; //vår valda ovve


    return (
      <div>
        <h1> Resulat </h1>

        <h1> {data.prog} </h1>
      </div>
    );
  }
}

export default Result;
