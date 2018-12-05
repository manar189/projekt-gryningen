import React, { Component } from 'react';
import './App.css';

import ColorData from './colorData'


class Color extends Component {

  constructor(props){
    super(props)
    this.myFunc = this.myFunc.bind(this) //Måste vara med om funktionen anropas i render().
    this.backFunc = this.backFunc.bind(this)
  }


  myFunc(item){
    const setColor = this.props.setColor
    setColor(item.color, item.hex);
  }

  backFunc()
  {
    const prevPage = this.props.backFunc
    prevPage();
  }

  render() {

    return (
      <div className="App">
        <img src ="images/arrow.svg" alt="Kunde inte ladda bilden" className="backButton" onClick={(b) => this.backFunc(b)}></img>
          <h1 id="colorTextHeader"> Välj färg </h1>
      <div className="color-grid-container">
        {ColorData.map((item, i) =>{

          if(item.hex.length === 2){
                    return <div className="grid-item" key={i} onClick={(e) => this.myFunc(item,e)}
                    style={{ background: 'linear-gradient(to right,'+ item.hex[0] +' 50%, '+ item.hex[1] +' 50%' , cursor:'pointer'}}>

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
