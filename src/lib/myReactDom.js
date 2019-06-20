export default {
  render(vnode, dom) {
    dom.appendChild(createNode(vnode));
  }
};

function createNode(vnode) {
  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }
  let { vType, type, props, children } = vnode;
  if (vType === 3) {
    let dom = document.createElement(type);
    props &&
      Object.keys(props).forEach(k => {
        dom.setAttribute(k == "className" ? "class" : k, props[k]);
      });
    if (children && children.length) {
      children.forEach(c => {
        dom.appendChild(createNode(c));
      });
    }
    return dom;
  } else if (vType == 2) {
    return createNode(type());
  } else {
    let ins = new type(props);
    return createNode(ins.render());
  }
}
