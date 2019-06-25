import ReactDom from "./lib/myReactDom";
let React = require("./lib/myReact").default;

// import ReactDom from "react-dom";
// import React from "react";

function Cmp(props) {
  return <div style="color: red">cmp's tag is {props.tag || props.name}</div>;
}

class Cmp2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div name="cmp2">cmp2's name is {this.props.name}</div>;
  }
}

const list = [1, 2, 3, "end"];
const jsx = (
  <div name="bigdiv" className="wrapper" tag="text">
    <ul>
      {list.map(item => (
        <li>{item}</li>
      ))}
    </ul>
    {list.map(item => (
      <Cmp tag={item} />
    ))}
    {list.map(item => (
      <Cmp2 name={item} />
    ))}
    <Cmp tag="function!" className="cmp" />
    <Cmp2 tag="Cmp2" className="cmpCmp2" name="getName:cmp2" class="classCmp" />
    <div name="firstDiv">
      firstDiv
      <Cmp name="just a cmp function" />
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
