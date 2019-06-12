import ReactDom from "react-dom";
import React from "react";

function Cmp() {
  return <div>Cmp funcion</div>;
}

class Cmp2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>cmp2's name is {this.props.name}</div>;
  }
}

const jsx = (
  <div>
    <Cmp />
    <Cmp2 name="Mike" />
    <div>just a normal div</div>
  </div>
);

console.log(jsx);

ReactDom.render(jsx, document.getElementById("app"));
