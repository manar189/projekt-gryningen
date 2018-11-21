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
      currentPage: page.START,
      barWidth: 0 
    }

    this.setColor = this.setColor.bind(this)
    this.setModel = this.setModel.bind(this)
    this.setStripes = this.setStripes.bind(this)
    this.setselectedData = this.setColor.bind(this)
  }

  startSearch(){
    //currentPage = page.COLOR;
    this.setState({currentPage: page.COLOR,
      barWidth: 20});
    //this.forceUpdate(); //uppdaterar sidan
  }

  setColor(_color){
  this.setState({currentPage: page.MODEL});
  selectedColor=_color;
  }

  setModel(_model){
  this.setState({currentPage: page.STRIPES});
  selectedModel=_model;
  }

  setStripes(_Stripes){ //borde inte behövas, läggs in ifall att.
  this.setState({currentPage: page.RESULT});
  selectedStripes=_Stripes;
  }


  /* Behövs nog ej
  setselectedData(_data){
    selectedData = _data;
    currentPage = page.RESULT;
    this.forceUpdate(); //uppdaterar sidan
  }
  */

/*  backButton() {
    if (this.state.currentPage != page.START) {
    return(
      <div id="backButton">-> </div>
      )
    }
  }*/


  renderContent() {
      switch (this.state.currentPage) {
        case page.START:
            return (
          <div>
            <div id = "startTextHeader">
               <h1>Ovve</h1>
               <h1>Meister</h1>
            </div>
            <img src="startLogo.png" id="startLogo" onClick={this.startSearch}></img>
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

    render() {
      const barProgress = {width: this.state.barWidth+"%"}; //Gör snyggare med funktion som baseras på sidan ist för width.state
      return (
        <div>
        <div id="progressbarBack"><div id="progressBarFront" style={barProgress}></div></div>
        {this.renderContent()}
        </div>
        )
    }

  

}

export default App;
