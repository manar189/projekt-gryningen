import React, { Component } from 'react';
import './App.css';
import Databas from './Databas'

class Stripes extends Component {


  constructor(props){
    super(props)
    this.nextPage = this.nextPage.bind(this) //Måste vara med om funktionen anropas i render().
  }



 //retunerar true om vi måste kolla revär annars false.
 checkStripes(){
   const color = this.props.color;
   const model = this.props.model;
   let cc = 0;
   Databas.map((item,i) => {

     if(item.model == model && item.color == color){
       cc++;
     }

   })
   if(cc >= 2){
      return true;
    }
    else {
      return false;
    }

}

nextPage(item){
 const setData = this.props.setData;
 setData(item);
}

//skippar sidan om vi inte behöver kolla revär.
  componentWillMount(){
    const color = this.props.color;
    const model = this.props.model;

    if(this.checkStripes() == false){

      Databas.map((item,i) => {
        if(item.model == model && item.color == color){
          this.nextPage(item)
        }
      })
    }

  }



  render() {
    const color = this.props.color;
    const model = this.props.model;
    return (
      <div>
        <h1> inside stripes </h1>
          <div>
            {Databas.map((item, i) =>{

              if(item.model == model && item.color == color){
                return (
                  <div style={{padding: '5px'}}>

                    <div onClick={(e) => this.nextPage(item,e)}  style={{backgroundColor: item.revar[1] }}>{item.revar[1]}</div>
                    <div onClick={(e) => this.nextPage(item,e)}  style={{backgroundColor: item.revar[2] }}>{item.revar[1]}</div>
                    <div onClick={(e) => this.nextPage(item,e)}  style={{backgroundColor: item.revar[3] }}>{item.revar[1]}</div>

                  </div>
                )
              }

            })}
          </div>
      </div>
    );
  }
}

export default Stripes;
