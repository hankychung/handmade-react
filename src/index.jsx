import ReactDom from "./lib/myReactDom";
let React = require("./lib/myReact").default;

// import ReactDom from "react-dom";
// import React from "react";

function Cmp() {
  return "function Cmp";
}

class Cmp2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div name="cmp2">cmp2's name is {this.props.name}</div>;
  }
}

const jsx = (
  <div name="bigdiv" className="wrapper" tag="text">
    <Cmp tag="a" className="cmp" />
    <Cmp2 tag="Cmp2" className="cmpCmp2" name="getName:cmp2" class="classCmp" />
    <div name="firstDiv">
      firstDiv
      <Cmp />
    </div>
    <div name="notext" />
    <div name="innerDiv">
      outsideStrong
      <Cmp2 name="in innerDiv" />
      <strong>just a normal div</strong>
    </div>
  </div>
);

console.log("jsx", jsx);

/**
 * also need React.createElement here 👇
 */
ReactDom.render(jsx, document.getElementById("app"));
