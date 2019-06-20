export default {
  render(vnode, dom) {
    dom.appendChild(createNode(vnode));
  }
};

function createNode(vnode) {
  let { type, props, children } = vnode;
  let dom = document.createElement(type);
  props &&
    Object.keys(props).forEach(k => {
      dom.setAttribute(k == "className" ? "class" : k, props[k]);
    });
  if (children && children.length) {
    children.forEach(c => {
      if (typeof c === "string") {
        dom.appendChild(document.createTextNode(c));
      } else {
        dom.appendChild(createNode(c));
      }
    });
  }
  return dom;
}
