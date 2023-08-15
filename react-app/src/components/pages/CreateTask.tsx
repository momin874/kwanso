import React from "react";
import { useNavigate } from "react-router-dom";

import CreateTaskForm from "../molecules/CreateTaskForm";

const CreateTask: React.FC = () => {
  const navigate = useNavigate();
  const storeFormValues = (inputValue: string) => {
    let id = Number(localStorage.getItem("id"));
    id = id + 1;

    const dataString = localStorage.getItem("tasks");
    const dataArray: {}[] = dataString ? JSON.parse(dataString) : [];

    dataArray.push({ id, name: inputValue });
    localStorage.setItem("tasks", JSON.stringify(dataArray));
    localStorage.setItem("id", `${id}`);
    navigate("/list-tasks");
  };

  return <CreateTaskForm onSubmit={storeFormValues} />;
};

export default CreateTask;
