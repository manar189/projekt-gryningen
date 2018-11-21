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
    let currentOvve;

    function checkModel(ovve)
    {
      if(ovve.color == chosenColor)
      {
        if(ovve.model == "Overall")
        {
          hasOvve = true;
        }
        if(ovve.model == "Hängsel")
        {
          hasHang = true;
        }
      }
      currentOvve = ovve;
    }

    OvveData.forEach(checkModel)
    {
      if(hasOvve == true && hasHang == true)
      {
        skipPage = false;
      }
    }

    if(skipPage)
    {
      this.nextPage(currentOvve);
    }
  }


   nextPage(item){

    const setModel = this.props.setModel;
    setModel(item.model);
  }




  render() {
    return(
      <div className="App">
        <h1 id="colorTextHeader">Välj modell</h1>
        <div id = "left"> 

        </div>

        <div id = "right"> 

        </div>
        </div>
      )
  }
}
export default Model;
