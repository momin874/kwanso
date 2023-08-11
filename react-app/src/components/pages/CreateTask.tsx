import React, { Component } from "react";
import CreateTaskForm from "../molecules/CreateTaskForm";
class CreateTask extends Component {
  showFormValues = (inputValue: string) => {
    alert(inputValue);
  };
  render() {
    return <CreateTaskForm onSubmit={this.showFormValues} />;
  }
}

export default CreateTask;
