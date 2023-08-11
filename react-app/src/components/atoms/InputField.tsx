import React, { Component, ChangeEvent } from "react";

interface InputProps {
  inputValue: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

class InputField extends Component<InputProps, {}> {
  render() {
    const { inputValue, onChange } = this.props;
    return <input type="text" value={inputValue} onChange={onChange} />;
  }
}

export default InputField;
