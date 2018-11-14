import React, { Component } from 'react';
import './App.css';

import ColorData from './colorData'


class Color extends Component {

  constructor(props){
    super(props)
    this.myFunc = this.myFunc.bind(this) //Måste vara med om funktionen anropas i render().
  }


  myFunc(item){
    const setColor = this.props.setColor
    setColor(item.color);
  }



  render() {

    return (
      <div className="color-grid-container">
        {ColorData.map((item, i)=>{

          return <div className="grid-item" key={i} onClick={(e) => this.myFunc(item,e)} style={{background: item.hex }}> {item.color} </div>

        })}
      </div>
    );
  }
}

export default Color;
