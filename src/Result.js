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
        <h1 id="resultTextHeader"> Resultat </h1>

        <div id="resultTextDiv"><p id="resultTextContent"> {data.prog} </p>
        </div>
        <div id = "resultOvveDiv">
          <img src = "hangsel.svg" id="hangselBild"></img>
        </div>
      </div>
    );
  }
}

export default Result;
