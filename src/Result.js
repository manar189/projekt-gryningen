import React, { Component } from 'react';
import './App.css';


class Result extends Component {

  constructor(props){
    super(props)
    this.backFunc = this.backFunc.bind(this)
    this.newSearch = this.newSearch.bind(this)
  }

  renderOvve(){
    const data = this.props.data;
    switch(data.model){
      case "Overall":
      return(
        <div>
          <img src = "images/ovve_revar_over.svg" className="ovveRevarOver"></img>
          <img src = "images/ovve_revar_under.svg" className="ovveRevarUnder"></img>
          <img src = "images/ovve_bakgrund.png" className ="ovveBakgrund" style={{background:data.hexColor}}></img>
          <img src = "images/ovve_skuggor.svg" className ="ovveSkugga" ></img>
        </div>
        )
      break;
      case "Hängsel":
      return(
        <div>
          <img src = "images/byxa_revar_over.svg" className="ovveRevarOver"></img>
          <img src = "images/byxa_revar_under.svg" className="ovveRevarUnder"></img>
          <img src = "images/byxa_bakgrund.png" className ="ovveBakgrund" style={{background:data.hexColor}}></img>
          <img src = "images/byxa_skuggor.svg" className ="ovveSkugga" ></img>
        </div>
        )
      break;

    }
  }

  backFunc()
  {
    const prevPage = this.props.backFunc
    prevPage();
  }

  newSearch()
  {
    const newSearch = this.props.startSearch
    newSearch();
  }

  render() {
    const data = this.props.data; //vår valda ovve

    return (
      <div>
        <div className="backButton" onClick={(b) => this.backFunc(b)}></div>
        <h1 id="resultTextHeader"> Resultat </h1>
        <div id="resultTextDiv"><p id="resultTextContent"> {data.prog} </p></div>
        <div id = "resultOvveDiv">
          {this.renderOvve()}
        </div>
        <div id="newSearchButton" onClick={(n) => this.newSearch(n)}><p>Ny sökning</p></div>
      </div>
    );
  }
}

export default Result;
