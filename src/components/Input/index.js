import React, { PureComponent } from "react";
import "./Input.sass";

class Input extends PureComponent {
  state = {
    inputValue: ""
  };

  getValue = e => {
    const { value } = e.target;
    const { handleMessage } = this.props;
    this.setState(
      {
        inputValue: value
      },
      () => handleMessage(value)
    );
  };

  render() {
    return <input type="text" onChange={this.getValue} />;
  }
}

export default Input;
