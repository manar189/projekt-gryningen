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
      <div className="App">
        <h1> Välj färg </h1>
      <div className="color-grid-container">
        {ColorData.map((item, i)=>{

          if(item.hex.length == 2){ //fråga gärna om hur vi kan få bort det hård-kodade färgerna till värderna i item.color[0] och item.color[1].
                    return <div className="grid-item" key={i} onClick={(e) => this.myFunc(item,e)}
                    style={{ background: 'linear-gradient(to left,yellow 45%, red 55%' , cursor:'pointer'}}>

                    </div>
          }
          else {
            return <div className="grid-item" key={i} onClick={(e) => this.myFunc(item,e)} style={{background: item.hex , cursor:'pointer'}}>

            </div>
          }



        })}
      </div>
      </div>
    );
  }
}

export default Color;
