import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import CreateTaskForm from "../molecules/CreateTaskForm";

const CreateTask: React.FC = () => {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(0);
  const storeFormValues = (id: number, inputValue: string) => {
    let dataString = localStorage.getItem("tasks");
    let dataArray: {}[] = [];
    dataArray = dataString ? JSON.parse(dataString) : [];

    dataArray.push({ id, name: inputValue });
    localStorage.setItem("tasks", JSON.stringify(dataArray));
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
    navigate("/list-tasks");
  };

  return <CreateTaskForm onSubmit={storeFormValues} counter={counter} />;
};

export default CreateTask;
