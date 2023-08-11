import React, { Component, ChangeEvent } from "react";
import Label from "../atoms/Label";
import Button from "../atoms/Button";
import InputField from "../atoms/InputField";

interface FormProps {
  onSubmit: (id: number, inputValue: string) => void;
  counter: number;
}

interface FormState {
  id: number;
  inputValue: string;
}

export class CreateTaskForm extends Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);

    this.state = {
      id: 0,
      inputValue: "",
    };
  }
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    this.setState({
      id: this.props.counter,
    });
    this.props.onSubmit(this.state.id, this.state.inputValue);
    this.setState({ inputValue: "" });
  };
  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: e.target.value,
    });
  };
  render() {
    return (
      <form>
        <Label text="name" />
        <InputField
          inputValue={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <Button text="Create Task" buttonHandler={this.handleSubmit} />
      </form>
    );
  }
}

export default CreateTaskForm;
