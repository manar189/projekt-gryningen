import React, { Component } from 'react';
import './App.css';

import OvveData from './Databas'

class Model extends Component {



  constructor(props){
    super(props)


    const firstModel = "";
    const count = 0;
    const skipPage = this.props.skipPage;
    const chosenColor = this.props.color;
    this.nextPage = this.nextPage.bind(this) //Måste vara med om funktionen anropas i render().
  }

  nextPage(item){

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

    {OvveData.map((item, i)=>{

        if(item.color == this.chosenColor)
        {
          if(this.count == 0)
          {
            this.firstModel = item.model;
            this.count = 1;
            console.log("Kommer hit");
          }
          else if(item.model != this.firstModel)
          {
            return <div><p>Finns 2 modeller</p></div>
          }
        }
        return <div><p>Finns 1 modell</p></div>
    })}

    return <div></div>
  render() {
    return(
      <div className="App">
        <h1> Välj modell </h1>
      <div className="color-grid-container">
      {OvveData.map((item, i)=>{
        return <div className="grid-item" key={i} onClick={(e) => this.nextPage(item,e)} style={{background: item.hex , cursor:'pointer'}}>
               </div>
      })}
      </div>
      </div>
    );
  }
}
export default Model;
