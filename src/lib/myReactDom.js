export default {
  render(vnode, dom) {
    dom.appendChild(createNode(vnode));
  }
};

function createNode(vnode) {
  let { vType, type, props, children } = vnode;
  if (vType === 3) {
    let dom = document.createElement(type);
    props &&
      Object.keys(props).forEach(k => {
        dom.setAttribute(k == "className" ? "class" : k, props[k]);
      });
    if (children && children.length) {
      children.forEach(c => {
        if (c instanceof Array) {
          c.forEach(vnode => {
            dom.appendChild(createNode(vnode));
          });
        } else {
          dom.appendChild(createNode(c));
        }
      });
    }
    return dom;
  } else if (vType == 2) {
    return createNode(type(props || {}));
  } else if (vType == 1) {
    let ins = new type(props);
    return createNode(ins.render());
  } else {
    // TextNode has no vType
    return document.createTextNode(vnode);
  }
}
