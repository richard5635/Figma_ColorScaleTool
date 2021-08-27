// Apr 19, 2021

import * as React from "react";
import * as ReactDOM from "react-dom";
import "./ui.css";

let space = require("color-space");
import { colorConverter } from "./color-converter";
import {ArrayFunc} from "./misc/array";
import ColorBox from "./components/colorBox";

// Reference
/*
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color

Style State Change
https://codepen.io/bekza/pen/ALdZmV?editors=1010
https://stackoverflow.com/questions/30668326/what-is-the-difference-between-using-constructor-vs-getinitialstate-in-react-r

Hello React and Typescript
https://stackoverflow.com/questions/48869369/property-value-does-not-exist-on-type-readonly/48870006

https://stackoverflow.com/questions/30782948/why-calling-react-setstate-method-doesnt-mutate-the-state-immediately

componentDidUpdate
*/

declare function require(path: string): any;

let colorsSaved = [];
let conv = new colorConverter();
let arrf = new ArrayFunc();

class App extends React.Component<{}, any> {
  textbox: HTMLInputElement;

  constructor(props) {
    super(props);
    this.state = {
      rgb: [0,0,0],
      lchab: [0,0,0],
      hex: "#000000",
      saved: [],
    };

    this.saveColor = this.saveColor.bind(this);
  }

  componentDidCatch(error, errorInfo) {}

  componentDidUpdate(prevProps, prevState) {
    if ( arrf.compare(this.state.rgb, prevState.rgb) ){
    }
    else if (this.state.hex != prevState.hex) {
    }
    else if(arrf.compare(this.state.lch, prevState.lch) ){

    }
    if(arrf.compare(this.state.saved, prevState.saved)){
      console.log(this.state.saved);
    }
  }

  countRef = (element: HTMLInputElement) => {
    if (element) element.value = "5";
    this.textbox = element;
  };

  onCreate = () => {
    const count = parseInt(this.textbox.value, 10);
    parent.postMessage(
      { pluginMessage: { type: "create-rectangles", count } },
      "*"
    );
  };

  onCancel = () => {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
  };

  onColorOne = (event) => {
    // console.log(event.target.value);
    this.onChangeColor(event, "hex");
  };

  onCreateColors = (e) => {
    // Should be posting colors placed in colorsSaved instead.
    let colors = this.state.saved;
    parent.postMessage(
      { pluginMessage: { type: "create-colors", colors } },
      "*"
    );
  };

  onChangeColor(e, id) {
    // Can we get the id?
    let value = e.target.value;

    
    if (id.substring(0, 3) === "rgb") {
      value = parseInt(value);
      

      let index = 0;
      if(id === "rgb-r") index = 0;
      else if (id === "rgb-g") index = 1;
      else if (id === "rgb-b") index = 2;

      // Validation
      if (value < space.rgb.min[0] || isNaN(value)){
        value = space.rgb.min[0];
      } 
      else if(value > space.rgb.max[0]) {
        value = space.rgb.max[0];
      }

      let rgb = [this.state.rgb[0], this.state.rgb[1], this.state.rgb[2]];
      rgb[index] = value;
      console.log(rgb);

      // Set State
      this.setState({rgb: rgb});

      // Change others
      this.changeOtherColors(id, rgb)
    } 
    else if (id === "hex") {
      // Validation
      console.log(value);
      if(!conv.isHexadecimal(this.state.hex.substring(1))){
        return;
      }

      // Set State
      this.setState({ hex: value });

      // Convert others
      this.changeOtherColors(id, value);
    }
    else if(id.substring(0,5) === "lchab") {
      value = parseInt(value);
      
      let index = 0;
      if(id === "lchab-l") index = 0;
      else if(id === "lchab-c") index = 1;
      else if(id === "lchab-h") index = 2;

      // Validation
      if(value < space.lchab.min[index] || isNaN(value) ){
        value = space.lchab.min[index]; // all element's min is 0.
      } else if( value > space.lchab.max[index] ){
        value = space.lchab.max[index];
      }

      let lchab = [this.state.lchab[0], this.state.lchab[1], this.state.lchab[2]];
      lchab[index] = value;
      console.log(lchab);

      // Set State
      this.setState({lchab: lchab});

      // Change others
      this.changeOtherColors(id, lchab);
    }
  }

  changeOtherColors(exception, col) {
    // Convert the value to rgb
    console.log("Conversion for: " + exception +  ", " + col);
    let rgb = [0,0,0];
    if(exception.substring(0,3) == "rgb"){
      rgb = col;
    } else if(exception.substring(0,5) == "lchab"){
      rgb = space.lchab.rgb(col);
    } else if(exception == "hex"){
      rgb = conv.hexrgb256(col);
    }

    // Change the state of the rest
    if (exception.substring(0,3) != "rgb") {
      rgb = [Math.round(rgb[0]), Math.round(rgb[1]), Math.round(rgb[2])];
      this.setState({rgb: rgb});
    }
    if (exception != "hex"){
      let hex = conv.rgb256hex(rgb);
      this.setState({hex: hex});
    }
    if (exception.substring(0,5) != "lchab"){
      let lchab = space.rgb.lchab(rgb);
      lchab = [Math.round(lchab[0]), Math.round(lchab[1]), Math.round(lchab[2])];
      this.setState({lchab: lchab});
    }
    console.log(this.state);
  }

  saveColor(){
    // Save as hex
    console.log("color saved: " + this.state.hex);
    colorsSaved = this.state.saved;
    colorsSaved.push(this.state.hex);
    this.setState({saved: colorsSaved});
  }

  render() {
    return (
      <div className="main">
        {/* <img src={require('./logo.svg')} />
      <h2>Rectangle Creator</h2>
      <p>Count: <input ref={this.countRef} /></p>
      <button id="create" onClick={this.onCreate}>Create</button>
      <button onClick={this.onCancel}>Cancel</button> */}
        <div className="header">
          <div
            className="color-block"
            style={{ backgroundColor: this.state.hex }}
          ></div>
        </div>

        <div className="content">
          <div className="line-container">
            <h3>Color</h3>
          </div>
          <div className="line-container">
            <div className="input-label">Picker</div>
            <input
              type="color"
              id="color01"
              key="color01"
              value={this.state.hex}
              onChange={this.onColorOne}
            ></input>
          </div>

          <div className="line-container">
          <div className="input-label">RGB</div>
            <input
              className="text-input text-input--short"
              id="rgb-r"
              type="text"
              value={this.state.rgb[0]}
              onChange={(e) => this.onChangeColor(e, "rgb-r")}
            />
            <input
              className="text-input text-input--short"
              id="rgb-g"
              type="text"
              value={this.state.rgb[1]}
              onChange={(e) => this.onChangeColor(e, "rgb-g")}
            />
            <input
              className="text-input text-input--short"
              id="rgb-b"
              type="text"
              value={this.state.rgb[2]}
              onChange={(e) => this.onChangeColor(e, "rgb-b")}
            />
          </div>

          <div className="line-container">
          <div className="input-label">LCHab</div>
            <input
              className="text-input text-input--short"
              id="lchab-l"
              type="text"
              value={this.state.lchab[0]}
              onChange={(e) => this.onChangeColor(e, "lchab-l")}
            />
            <input
              className="text-input text-input--short"
              id="lchab-c"
              type="text"
              value={this.state.lchab[1]}
              onChange={(e) => this.onChangeColor(e, "lchab-c")}
            />
            <input
              className="text-input text-input--short"
              id="lchab-h"
              type="text"
              value={this.state.lchab[2]}
              onChange={(e) => this.onChangeColor(e, "lchab-h")}
            />
          </div>
          <div className="line-container">
            <div className="input-label">Hex</div>
            <input
              className="text-input text-input--hex"
              id="hex"
              type="text"
              value={this.state.hex}
              onChange={(e) => this.onChangeColor(e, "hex")}
            />
          </div>
          <div className="line-container">
            <button id="save-color" onClick={this.saveColor}>Save Color</button>
          </div>
          <div className="line-container">
            <hr></hr>
          </div>
          <div className="line-container">
            {this.state.saved.length}
            {colorsSaved.map((col,index) => { 
              return (<ColorBox key={"colorbox-"+index} color={col}>a</ColorBox>)
            })}
          </div>
          <div className="line-container">
            <button id="execute-button" onClick={this.onCreateColors}>
              Create Rectangle
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("react-page"));
