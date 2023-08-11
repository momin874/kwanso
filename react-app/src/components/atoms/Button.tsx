import React, { Component } from "react";
interface ButtonProps {
  text: string;
  buttonHandler: (e: React.FormEvent) => void;
}

class Button extends Component<ButtonProps> {
  render() {
    const { text, buttonHandler } = this.props;
    return <button onClick={buttonHandler}>{text}</button>;
  }
}

export default Button;
