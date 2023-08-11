import React, { Component } from "react";
interface LableProps {
  text: string;
}
class Label extends Component<LableProps> {
  render() {
    const { text } = this.props;
    return <div>{text}</div>;
  }
}

export default Label;
