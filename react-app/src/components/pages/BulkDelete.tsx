import React from "react";
import ListTask from "./ListTasks";
import Button from "../atoms/Button";

const BulkDelete: React.FC = () => {
  const checkedIds: number[] = [];
  const checkBoxChanged =
    (id: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        checkedIds.push(id);
      } else {
        checkedIds.splice(checkedIds.indexOf(id), 1);
      }
    };
  const deleteTasks = () => {
    console.log(checkedIds);
  };
  return (
    <div>
      <ListTask showCheckBox={true} handleCheckBox={checkBoxChanged} />
      <Button text="delete" buttonHandler={deleteTasks} />
    </div>
  );
};

export default BulkDelete;
