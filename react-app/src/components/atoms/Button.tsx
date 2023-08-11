import React, { Component } from "react";
import { Button as MuiButton } from "@mui/material";

interface ButtonProps {
  text: string;
  buttonHandler: (e: React.FormEvent) => void;
}

class Button extends Component<ButtonProps> {
  render() {
    const { text, buttonHandler } = this.props;
    return <MuiButton onClick={buttonHandler}>{text}</MuiButton>;
  }
}

export default Button;
