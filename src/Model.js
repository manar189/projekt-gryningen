import React, { Component } from 'react';
import './App.css';

import OvveData from './Databas'

class Model extends Component {

  constructor(props){
    super(props)

    const chosenColor = this.props.color;
    this.nextPage = this.nextPage.bind(this) //Måste vara med om funktionen anropas i render().
    this.backFunc = this.backFunc.bind(this)

    let hasOvve = false;
    let hasHang = false;
    let skipPage = true;
    //let currentOvve;
    let ovveModel;

    function checkModel(ovve)
    {
      if(ovve.color === chosenColor)
      {
        if(ovve.model === "Overall")
        {
          hasOvve = true;
        }
        if(ovve.model === "Hängsel")
        {
          hasHang = true;
        }

        ovveModel = ovve.model;
      }
    }

    OvveData.forEach(checkModel)
    {
      if(hasOvve === true && hasHang === true)
      {
        skipPage = false;
      }
    }

    if(skipPage)
    {
      this.nextPage(ovveModel, true);
    }
  }


   nextPage(item, skipPage){

    const setModel = this.props.setModel;
    setModel(item, skipPage);
  }

  backFunc()
  {
    const prevPage = this.props.backFunc
    prevPage();
  }

  render() {
    return(
      <div className="App">
        <img src ="images/arrow.svg" alt="Kunde inte ladda bilden" className="backButton" onClick={(b) => this.backFunc(b)}></img>
        <h1 id="colorTextHeader">Välj modell</h1>
        <div id = "left" onClick={(e) => this.nextPage("Overall", false, e)} style={{cursor:'pointer'}}>
          <img src = "images/ovve_bakgrund.png" alt="Kunde inte ladda bilden" className ="ovveBakgrund" style={{background:this.props.hex}} ></img>
          <img src = "images/ovve_skuggor.svg" alt="Kunde inte ladda bilden" className ="ovveSkugga" ></img>

        </div>
        <div id = "right" onClick={(e) => this.nextPage("Hängsel", false, e)} style={{cursor:'pointer'}}>

          <img src = "images/byxa_bakgrund.png" alt="Kunde inte ladda bilden" className ="ovveBakgrund" style={{background:this.props.hex}}></img>
          <img src = "images/byxa_skuggor.svg" alt="Kunde inte ladda bilden" className ="ovveSkugga" ></img>
        </div>
      </div>
      )
  }
}
export default Model;
