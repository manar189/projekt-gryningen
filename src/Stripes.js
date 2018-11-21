import React, { Component } from 'react';
import './App.css';

import OvveData from './Databas'

class Stripes extends Component {

  constructor(props){
    super(props)

    const chosenColor = this.props.color;
    const chosenModel = this.props.model;
    this.nextPage = this.nextPage.bind(this) //Måste vara med om funktionen anropas i render().

    let counter = 0;
    let currentOvve;

    function checkStripes(ovve)
    {
      if(ovve.color == chosenColor && ovve.model == chosenColor)
      {
        ++counter;
        currentOvve = ovve;
      }
    }
/* //Behöver fixas
    OvveData.forEach(checkStripes)

    if(counter < 2)
    {
      this.nextPage(currentOvve);
    }
*/
  }

  nextPage(item){

   const setModel = this.props.setStripes;
   setModel(item.revar);
 }




  render() {

    return (
      <div>
          <h1> Inside Stripes.js </h1>
      </div>
    );
  }
}

export default Stripes;
