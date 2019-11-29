import React, { PureComponent } from "react";
import "./Input.sass";

class Input extends PureComponent {
  state = {
    value: ""
  };

  getValue = e => {
    const { value } = e.target;
    this.setState({
      value
    });
    console.log(value);
  };

  render() {
    return <input type="text" onChange={this.getValue} />;
  }
}

export default Input;
