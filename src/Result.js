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
          <img src = "images/ovve_revar_over.svg" alt="Kunde inte ladda bilden" className="ovveRevarOver"></img>
          <img src = "images/ovve_revar_under.svg" alt="Kunde inte ladda bilden" className="ovveRevarUnder"></img>
          <img src = "images/ovve_bakgrund.png" alt="Kunde inte ladda bilden" className ="ovveBakgrund" style={{background:data.hexColor}}></img>
          <img src = "images/ovve_skuggor.svg" alt="Kunde inte ladda bilden" className ="ovveSkugga" ></img>
        </div>
        )
      case "Hängsel":
      return(
        <div>
          <img src = "images/byxa_revar_over.svg" alt="Kunde inte ladda bilden" className="ovveRevarOver"></img>
          <img src = "images/byxa_revar_under.svg" alt="Kunde inte ladda bilden" className="ovveRevarUnder"></img>
          <img src = "images/byxa_bakgrund.png" alt="Kunde inte ladda bilden" className ="ovveBakgrund" style={{background:data.hexColor}}></img>
          <img src = "images/byxa_skuggor.svg" alt="Kunde inte ladda bilden" className ="ovveSkugga" ></img>
        </div>
        )
      default: break;

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
      <div id="returnDiv">
      <i class="fas fa-chevron-circle-left" onClick={(b) => this.backFunc(b)}></i>
      </div>   
      <h1 id="resultTextHeader"> Resultat </h1>
      <div id = "resultOvveDiv">
        <p id="resultTextContent"> {data.prog} </p>
        {this.renderOvve()}
        <p id="resultTextCampus"> {data.campus} </p>
      </div>
      <div id="newSearchButton" onClick={(n) => this.newSearch(n)}><p>Ny sökning</p></div>
      </div>
      );
  }
}

export default Result;
