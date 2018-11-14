import React, { Component } from 'react';
import './App.css';

import Color from './Color'
import Model from './Model'
import Stripes from './Stripes'
import Result from './Result'



//Variabler till söknigen
var selectedColor;   //ovvens färg
var selectedModel;   //ovvens modell
var selectedStripes; //ovvens revär (bör inte behövas användas)
var selectedData;    //datan som skickas från sista sidan i söknigen

//variabler fär att hålla koll på sökningen
const page = {
  START: 0,
  COLOR: 1,
  MODEL: 2,
  STRIPES: 3,
  RESULT: 4
}
var currentPage; //sidan som är aktiv


class App extends Component {

  constructor(props){
    super(props)
    currentPage = page.START; //OBS! Ändra här om du vill se en annan sida från start
    this.startSearch = this.startSearch.bind(this) //Måste vara med om funktionen anropas i render().
    this.state = {
      currentPage: page.START
    }

    this.setColor = this.setColor.bind(this)
    this.setModel = this.setModel.bind(this)
    this.setStripes = this.setStripes.bind(this)
    this.setselectedData = this.setColor.bind(this)
  }

  startSearch(){
    //currentPage = page.COLOR;
    this.setState({currentPage: page.COLOR});
    //this.forceUpdate(); //uppdaterar sidan
  }

  setColor(_color){
    selectedColor = _color;
    currentPage = page.MODEL;
    this.forceUpdate(); //uppdaterar sidan
  }

  setModel(_model){
    selectedModel = _model;
    currentPage = page.STRIPES;
    this.forceUpdate(); //uppdaterar sidan
  }

  setStripes(_Stripes){ //borde inte behövas, läggs in ifall att.
    selectedModel = _Stripes;
    currentPage = page.RESULT;
    this.forceUpdate(); //uppdaterar sidan
  }

  setselectedData(_data){
    selectedData = _data;
    currentPage = page.RESULT;
    this.forceUpdate(); //uppdaterar sidan
  }



  render() {
    switch (this.state.currentPage) {
      case page.START:
          return (
          <div>
            <p> Hi and wellcome to my minecraft server </p>
            <h1 onClick={this.startSearch}> next page </h1>
          </div>
        )
        break;
      case page.COLOR:
          return <Color setColor={this.setColor}/>
        break;
      case page.MODEL:
          return <Model color={selectedColor} setModel={this.setModel}/>
        break;
      case page.STRIPES:
            return <Stripes color={selectedColor} model={selectedModel} setStripes={this.setStripes}/>
          break;
      case page.RESULT:
            return <Result
            model={selectedModel}
            color={selectedColor}
            stripes={selectedStripes}
            />
          break;
      default:
        return <h1 className="errorMessage"> Error, fel val av värde på selectedStripes</h1>
    }
  }
}

export default App;
