import React, { Component } from 'react';
import './App.css';


class Stripes extends Component {

  constructor(props){
    super(props)

    const chosenColor = this.props.color;
    const chosenModel = this.props.model;
    this.nextPage = this.nextPage.bind(this) //Måste vara med om funktionen anropas i render().
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
