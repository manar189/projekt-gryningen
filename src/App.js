import React, { Component } from 'react';
import './App.css';

import Color from './Color'
import Model from './Model'
import Stripes from './Stripes'
import Result from './Result'
import About from './About'

//Variabler till söknigen
var selectedColor;   //ovvens färg
var selectedModel;   //ovvens modell
var selectedData;    //datan som skickas från sista sidan i söknigen
var selectedHex; //

//variabler fär att hålla koll på sökningen
const page = {
  START: 0,
  COLOR: 1,
  MODEL: 2,
  STRIPES: 3,
  RESULT: 4,
  ABOUT: 5
}

var checkPrevious = [false, false, false, false];   //loggar föregående sida för att kunna backa

class App extends Component {

  constructor(props){
    super(props)
    this.startSearch = this.startSearch.bind(this) //Måste vara med om funktionen anropas i render().
    this.state = {
      currentPage: page.START,
      barWidth: 0
    }

    this.setColor = this.setColor.bind(this)
    this.setModel = this.setModel.bind(this)
    this.prevPage = this.prevPage.bind(this)
    this.setselectedData = this.setselectedData.bind(this)
    this.setAbout = this.setAbout.bind(this)
  }

  startSearch(){
    checkPrevious[0] = true;
    checkPrevious[1] = false;
    checkPrevious[2] = false;
    checkPrevious[3] = false;

    this.setState({currentPage: page.COLOR,
    barWidth: 25});
  }

  setColor(_color, _hex){
    checkPrevious[1] = true;
    selectedColor=_color;
    selectedHex=_hex;
  this.setState({currentPage: page.MODEL,
    barWidth: 50});
  }

  setModel(_model, isSkipped){
    selectedModel=_model;

    if(!isSkipped)
    {
      checkPrevious[2] = true;
    }

    this.setState({currentPage: page.STRIPES,
    barWidth: 75});
  }

  setselectedData(_data, isSkipped){
    selectedData = _data;

    if(!isSkipped)
    {
      checkPrevious[3] = true;
    }

    this.setState({currentPage: page.RESULT,
    barWidth: 100});
  }

  setAbout() {
    checkPrevious[0] = true;
     this.setState({currentPage: page.ABOUT,
    barWidth: 0});
  }

  prevPage()
  {
    let changeBar;
    let previousPage;

    for(let i = 3; i >= 0; --i)
    {
      if(checkPrevious[i])
      {
        previousPage = i;
        checkPrevious[i] = false;

        break;
      }
    }

    switch (previousPage) {
      case page.START:
        changeBar = 0;
        break;
      case page.COLOR:
        changeBar = 25;
        break;
      case page.MODEL:
        changeBar = 50;
        break;
      case page.STRIPES:
        changeBar = 75;
        break;
      case page.RESULT:
        changeBar = 100;
        break;
      default: break;
    }

    this.setState({currentPage: previousPage,
    barWidth: changeBar});

  }

  renderContent() {
      switch (this.state.currentPage) {
        case page.START:
            return (
          <div>
            <div id = "startTextHeader">
               <h1>Ovve</h1>
               <h1>Meister</h1>
            </div>
            <img className="animated rotateIn" src="startLogo.png" alt="Kunde inte ladda bilden" id="startLogo" onClick={this.startSearch}></img>
            <div id = "aboutDiv" onClick={this.setAbout}><i id="aboutIcon" className="fas fa-question"></i></div>
          </div>
          )

      case page.COLOR:
          return <Color setColor={this.setColor} backFunc={this.prevPage}/>
      case page.MODEL:
          return <Model color={selectedColor} hex={selectedHex} setModel={this.setModel} backFunc={this.prevPage}/>
      case page.STRIPES:
            return <Stripes color={selectedColor} model={selectedModel} setData={this.setselectedData} backFunc={this.prevPage}/>
      case page.RESULT:
          return <Result data ={selectedData} backFunc={this.prevPage} startSearch={this.startSearch}/>
      case page.ABOUT:
            return <About backFunc={this.prevPage}/>
      default:
        return <h1 className="errorMessage"> Error, går in i default på switchen</h1>
      }
    }

    renderProgressbar(){
      const barProgress = {width: this.state.barWidth+"%"};
      if(this.state.currentPage != page.ABOUT)
      {
        return <div id="progressbarBack"><div id="progressBarFront" style={barProgress}></div></div>
      }
    }

    render() {
      return (
        <div>
        {this.renderProgressbar()}
        {this.renderContent()}
        </div>
        )
    }
}

export default App;
