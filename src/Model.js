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
          }
          else if(item.model != this.firstModel)
          {
            return <div><p>Finns 2 modeller</p></div>
          }
        }
        return <div><p>Finns 1 modell</p></div>
    })}

    return <div></div>
  }
}

export default Model;
