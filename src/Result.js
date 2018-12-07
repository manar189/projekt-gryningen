import React, { Component } from 'react';
import './App.css';


class Result extends Component {

  constructor(props){
    super(props)
    this.backFunc = this.backFunc.bind(this)
    this.newSearch = this.newSearch.bind(this)
  }

  renderOvve(){
    const data = this.props.data;

    switch(data.model){
      case "Overall":
      if (data.hexColor[2].charAt(0) === '#'){
      return(
        <div>
          <img src = "images/ovve_bakgrund.png" alt="Kunde inte ladda bilden" className ="ovveBakgrund" id="resultatOvveBakgrund" style={{ background: 'linear-gradient(to right,'+ data.hexColor[2] +' 46%, '+ data.hexColor[1] +' 51%)100%' }}></img>
          <img src = "images/ovve_skuggor.svg" alt="Kunde inte ladda bilden" className ="ovveSkugga" id="resultatOvveSkugga" ></img>
        </div>
        )
      break;
    }
    else{
      return(
        <div>
          <img src = "images/ovve_bakgrund.png" alt="Kunde inte ladda bilden" className ="ovveBakgrund" id="resultatOvveBakgrund" style={{background:data.hexColor}}></img>
          <img src = "images/ovve_skuggor.svg" alt="Kunde inte ladda bilden" className ="ovveSkugga" id="resultatOvveSkugga" ></img>
        </div>
        )
      break;
    }
      case "Hängsel":
      if (data.hexColor[2].charAt(0) === '#'){
      return(
        <div>
          <img src = "images/byxa_bakgrund.png" alt="Kunde inte ladda bilden" className ="ovveBakgrund" id="resultatOvveBakgrund" style={{ background: 'linear-gradient(to right,'+ data.hexColor[2] +' 46%, '+ data.hexColor[1] +' 51%)100%' }}></img>
          <img src = "images/byxa_skuggor.svg" alt="Kunde inte ladda bilden" className ="ovveSkugga" id="resultatOvveSkugga" ></img>
        </div>
        )
      break;
    }
    else{
      return(
        <div>
        <img src = "images/byxa_bakgrund.png" alt="Kunde inte ladda bilden" className ="ovveBakgrund" id="resultatOvveBakgrund" style={{background:data.hexColor}}></img>
        <img src = "images/byxa_skuggor.svg" alt="Kunde inte ladda bilden" className ="ovveSkugga" id="resultatOvveSkugga" ></img>
      </div>
      )
    break;
    }
      default: break;

    }
  }

  renderRevar(){
    const data = this.props.data;
    switch (data.model) {
      case "Overall":
        return(

        <svg id="revarSVG" x="0px" y="0px"
        	 viewBox="0 0 595.3 841.9">
          <g id="underrevar">
          <polygon style={{fill: data.revar[3] }} class="st0" points="284.3,32.8 285.8,38.9 287.8,38.8 292.5,56.1 301.2,68 315.8,77.2 329.7,82.8 338,84.7 338.6,78
    330.8,76.3 315.2,67.8 300,54.6 296.7,40.7 290.5,32 		"/>
  <polygon class="st0" style={{fill: data.revar[3] }} points="359.4,138.5 366.4,137.3 379.3,170.8 403.7,192.3 429.3,202.8 454,226.9 448.8,231.9 435,218
    420.9,206.1 398,197.9 386.9,190.1 377.5,179.6 366.5,161.5 		"/>
  <polygon class="st0" style={{fill: data.revar[3] }} points="421.4,128.8 426.8,125.6 430.2,155.5 437.3,170 438.8,184 433.4,191.2 428.4,186.4 431.2,181.1
    431,176.1 425.5,164.6 422.5,151 422.6,131.5 		"/>
  <polygon class="st0" style={{fill: data.revar[3] }} points="431.9,319.6 438.7,319.8 429,283.2 438.2,250.3 435.6,242 429.8,245.5 430.5,246.8 430.6,250.2
    423.5,269.6 422.1,278 422.1,283.8 424.1,296.2 		"/>
  <polygon class="st0" style={{fill: data.revar[3] }} points="428.9,465.6 422.9,467.5 426.9,491.2 427,511.5 420.9,550.8 413,623 410,663.2 411,673.4
    418.9,719.5 425.5,718.2 416.7,665.7 433.7,493.3 		"/>
          </g>
          <g id="mellanrevar">
          <polygon class="st1" style={{fill: data.revar[1] }} points="339.2,70.6 331.2,68.8 316.2,61.4 306.8,53.6 300.1,32.3 294.2,26.2 286.8,24.6 282.5,25.3
    284.3,32.8 290.5,32 296.7,40.7 300,54.6 315.2,67.8 330.8,76.3 338.6,78 		"/>
  <polygon class="st1" style={{fill: data.revar[1] }} points="426.8,125.6 433.5,121.6 435.1,124.6 436.9,133.2 436.2,149.2 436.9,156.4 443.4,168.9 445.4,178.4
    444.4,187 441.4,192.9 438.4,196 433.4,191.2 438.8,184 437.3,170 430.2,155.5 		"/>
  <polygon class="st1" style={{fill: data.revar[1] }} points="373.1,136.1 381.6,159.5 394.1,178.6 410.2,187.6 423.1,191.4 437.2,201.2 459.1,222 454,226.9
    429.3,202.8 403.7,192.3 379.3,170.8 367.3,141.7 366.4,137.3 		"/>
  <polygon class="st1" style={{fill: data.revar[1] }} points="438.7,319.8 445.8,320.1 443.9,309.6 437.4,291 435.6,283 437.5,272 443.6,255.5 444.8,246.8
    441.9,238.2 435.6,242 438.2,250.3 432.5,268.8 429,283.2 		"/>
  <polygon class="st1" style={{fill: data.revar[1] }} points="436.4,463.2 441.1,493.4 440.5,521.1 436.8,538.5 423.9,668 432.9,716.8 425.5,718.2 416.7,665.7
    428.9,537.3 433.7,493.3 428.9,465.6 		"/>
          </g>
          <g id="ovarrevar">
          	<polygon class="st2" style={{fill: data.revar[2] }} points="422.1,718.9 429.2,717.5 420.2,668.8 429.2,568.8 433.8,537.5 437,520.5 437.5,493 432.6,464.3
          		426.3,466.5 430.2,490.5 430.5,511 426.3,535.8 424.2,550.5 416.7,623 413.5,663 414.5,672.8 	"/>
          	<polygon class="st2" style={{fill: data.revar[2] }} points="435,319.7 441.8,320 440,308.5 433.5,291 431.8,282.8 433.9,270.5 439.3,255.5 440.8,247.7
          		439.5,242.3 438.2,240.4 432.6,243.8 433.5,247.2 433.5,251.8 427,271.2 424.8,279.2 425.2,284 426.8,294.7 	"/>
          	<polygon class="st2" style={{fill: data.revar[2] }} points="456.1,224.9 451.5,229.2 436.3,214.8 422.1,202.8 415.8,200.3 398.8,194.8 390.2,188.2 379.2,175.7
          		369.3,160.2 363.1,137.9 369.5,136.7 378.7,161.3 393,181.7 409.2,191.5 422.1,194.8 435.7,204.2 	"/>
          	<polygon class="st2" style={{fill: data.revar[2] }} points="431.3,189.2 435.7,193.4 440.5,189 442.3,184 442.5,177.5 440.3,170 433.9,157.7 432.5,150.2
          		433.3,134.3 431.8,126.8 430.3,123.5 424.8,126.7 425.5,130.3 426.2,139.3 425.7,150.5 428.8,163.3 434.5,174.8 434.5,182.2 	"/>
          	<polygon class="st2" style={{fill: data.revar[2] }} points="338.2,80.8 338.8,74.3 330.5,72.5 315.2,65.2 304.2,55.7 299.5,40.8 297.6,36.2 292.7,30.3
          		286.7,28.7 283.2,28.7 285,36.4 290.2,36.2 296.8,53 304.3,65.7 317.2,74 330.7,79.7 	"/>
          </g>
          </svg>

        )

        break;
      case "Hängsel":
        return(
          <svg id="revarSVG" x="0px" y="0px"
          	 viewBox="0 0 595.3 841.9">
          <g id="underrevar">
          <polygon class="st0" style={{fill: data.revar[3] }} points="412.5,62.5 418.7,60.9 427.3,92.3 428,158.3 434,200.3 430.4,265.8 430.7,281.7 441.7,319.6
  434.5,319.6 423,284.2 422.2,263.8 428.8,201.8 423.2,178.8 420.8,154 420.8,108.8 419.5,93 	"/>
<polygon class="st0" style={{fill: data.revar[3] }} points="424.7,467.3 430.5,465.5 436.2,508.2 418.2,665.8 427.4,718.2 421.2,719.5 412,665 422.7,553.3
  429.7,506.7 427.9,483.3 	"/>
          </g>
          <g id="mittenrevar">
          <polygon class="st1" style={{fill: data.revar[1] }} points="426,59 434.5,101 434.5,159.8 436.8,175.8 439,185.5 441.4,190.2 442.5,203.8 436,279 439.2,291
  445,303.2 448.2,319.6 441.7,319.6 430.7,281.7 434,200.3 428,158.3 427.3,92.3 418.7,60.9 	"/>
<polygon class="st1" style={{fill: data.revar[1] }} points="438.3,463 442.7,481.3 442.7,519.7 438.7,542.7 426.5,668.6 435,716.6 427.4,718.2 418.2,665.8
  436.2,508.2 430.5,465.5 	"/>
          </g>
          <g id="ovarrevar">
          <polygon class="st2" style={{fill: data.revar[2] }} points="425.2,718.7 431,717.5 421.9,666.1 435,543.2 439,519.2 439,481.9 434.1,464.3 427,466.6 430.8,483.9
  432.9,509.1 426.1,553.3 415.6,665.5 	"/>
<polygon class="st2" style={{fill: data.revar[2] }} points="438,319.6 445.4,319.6 441.1,303.5 436.9,291 433.5,278.8 435.8,247 439,203.8 438.3,190.2
  436.8,185.5 433,176.7 430.5,153.3 430.5,112.7 430.4,94.7 422,60 416,61.6 424.5,93 425.3,108.8 425.3,154 426.9,178.8
  429.5,194.2 430.3,201.8 426.2,263.8 426.7,284.2 430.3,300.8 	"/>
          </g>
          </svg>
        )

        break;
      default: break;

    }
  }

  backFunc()
  {
    const prevPage = this.props.backFunc
    prevPage();
  }

  newSearch()
 {
   const newSearch = this.props.startSearch
   newSearch();
 }

  render() {
    const data = this.props.data; //vår valda ovve

    return (
      <div>
      <img src ="images/arrow.svg" className="backButton" onClick={(b) => this.backFunc(b)}></img>
      <h1 id="resultTextHeader"> Resultat </h1>

      <div id = "resultOvveDiv">
        <p id="resultTextContent"> {data.prog} </p>
        {this.renderRevar()}
        {this.renderOvve()}
        <p id="resultTextCampus"> {data.campus} </p>
      </div>
      <div id="newSearchButton" onClick={(n) => this.newSearch(n)}><p>Ny sökning</p></div>
      </div>
      );
  }
}

export default Result;
