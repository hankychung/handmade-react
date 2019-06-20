class Component {
  static isClass() {
    return true;
  }
  constructor(props) {
    this.props = props;
  }
}

/**
 * -- vtype --
 * 1: Class
 * 2: function
 * 3: Html tag
 */
function createElement(type, props, ...children) {
  let vType;
  if (Object.prototype.toString.call(type) === "[object Function]") {
    if (type.isClass) {
      vType = 1;
    } else {
      vType = 2;
    }
  } else {
    vType = 3;
  }

  return {
    vType,
    type,
    props,
    children
  };
}

export default {
  Component,
  createElement
};
