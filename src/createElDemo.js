import ReactDom from "react-dom";
import React from "react";

function Cmp() {
  return React.createElement("div", {}, "hello");
}

class Cmp2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return React.createElement(
      "div",
      null,
      this.props.name,
      React.createElement(Cmp)
    );
  }
}

ReactDom.render(
  React.createElement(Cmp2, { name: "i am Cmp2" }),
  document.getElementById("app")
);
