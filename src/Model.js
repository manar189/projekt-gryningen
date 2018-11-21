import React, { Component } from 'react';
import './App.css';

import OvveData from './Databas'

class Model extends Component {

  constructor(props){
    super(props)

    const chosenColor = this.props.color;
    this.nextPage = this.nextPage.bind(this) //Måste vara med om funktionen anropas i render().

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
        //currentOvve = ovve;
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
      this.nextPage(ovveModel);
    }
  }


   nextPage(item){
    const setModel = this.props.setModel;
    setModel(item);
  }


  render() {
    return(
      <div className="App">
        <h1 id="colorTextHeader">Välj modell</h1>
        <div id = "left" onClick={(e) => this.nextPage("Overall",e)} style={{cursor:'pointer'}}>
          <img src = "ovve.svg" id="ovveBild"></img>
        </div>
        <div id = "right" onClick={(e) => this.nextPage("Hängsel",e)} style={{cursor:'pointer'}}>
          <img src = "hangsel.svg" id="hangselBild"></img>
        </div>
      </div>
      )
  }
}
export default Model;
