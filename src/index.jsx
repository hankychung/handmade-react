import ReactDom from "./lib/myReactDom";
import React from "./lib/myReact";

function Cmp() {
  return <div>Cmp funcion</div>;
}

// class Cmp2 extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return <div>cmp2's name is {this.props.name}</div>;
//   }
// }

const jsx = (
  <div name="bigdiv" className="wrapper" tag="text">
    <div name="firstDiv">firstDiv</div>
    <div name="notext" />
    <div name="innerDiv">
      outsideStrong<strong>just a normal div</strong>
    </div>
  </div>
);

ReactDom.render(jsx, document.getElementById("app"));
