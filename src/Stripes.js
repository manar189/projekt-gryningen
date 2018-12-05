import React, { Component } from 'react';
import './App.css';
import Databas from './Databas'

class Stripes extends Component {


  constructor(props){
    super(props)
    this.nextPage = this.nextPage.bind(this) //Måste vara med om funktionen anropas i render().
    this.backFunc = this.backFunc.bind(this)
  }



 //retunerar true om vi måste kolla revär annars false.
 checkStripes(){
   const color = this.props.color;
   const model = this.props.model;
   let cc = 0;
   Databas.map((item,i) => {

     if(item.model === model && item.color === color){
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

nextPage(item, isSkipped){
 const setData = this.props.setData;
 setData(item, isSkipped);
}

backFunc()
{
  const prevPage = this.props.backFunc
  prevPage();
}

//skippar sidan om vi inte behöver kolla revär.
  componentWillMount(){
    const color = this.props.color;
    const model = this.props.model;

    if(this.checkStripes() === false){

      Databas.map((item,i) => {
        if(item.model === model && item.color === color){
          this.nextPage(item, true)
        }
      })
    }

  }



  render() {
    const color = this.props.color;
    const model = this.props.model;
    return (
      <div>
      <img src ="images/arrow.svg" alt="Kunde inte ladda bilden" className="backButton" onClick={(b) => this.backFunc(b)}></img>
        <h1 id="colorTextHeader"> Välj revär</h1>
          <div className="revarContainerOuter">
          <div className="revar-container">
            {Databas.map((item, i) =>{

              if(item.model === model && item.color === color){
                return (

                  <div className="revar">
                  <img className="texture" src="texture.jpg" onClick={(e) => this.nextPage(item,false,e)}/>
                    <div className="top" style={{backgroundColor: item.revar[1] }}></div>
                    <div className="middle" style={{backgroundColor: item.revar[2] }}></div>
                    <div className="bottom" style={{backgroundColor: item.revar[3] }}></div>

                  </div>


                )
              }


            })}
            </div>
          </div>
      </div>
    );
  }
}

export default Stripes;
