import React, { forwardRef } from "react";
import OutlinedCard from "../molecules/OutlinedCard";
import { useNavigate } from "react-router-dom";
interface ListTasksProps {
  showCheckBox?: boolean;
}
export interface bulkDeleteRef {
  handleBulkDelete: () => void;
}
const ListTask = forwardRef<bulkDeleteRef, ListTasksProps>(
  ({ showCheckBox }, ref) => {
    const selectedTasks: Array<Number> = [];
    const navigate = useNavigate();
    const handleBulkDelete = () => {
      const dataString = localStorage.getItem("tasks");
      const dataArray: { id: number; taskName: string }[] = dataString
        ? JSON.parse(dataString)
        : [];
      console.log(dataArray, selectedTasks);

      if (dataArray.length) {
        for (let i = 0; i < dataArray.length; i++) {
          let index = selectedTasks.indexOf(dataArray[i].id);
          if (index >= 0) {
            dataArray.splice(i, 1);
            i--;
            selectedTasks.splice(index, 1);
          }
        }
      }
      localStorage.setItem("tasks", JSON.stringify(dataArray));
      navigate("/bulk-delete");
    };
    const tasks = (() => {
      return JSON.parse(localStorage.getItem("tasks") ?? "[]");
    })();
    React.useImperativeHandle(ref, () => ({
      handleBulkDelete,
    }));
    const data = tasks instanceof Array ? tasks : [];
    const addSelectedTask = (id: number) => {
      if (selectedTasks.indexOf(id) < 0) {
        selectedTasks.push(id);
      }
    };
    const removeSelectedTask = (id: number) => {
      const index = selectedTasks.indexOf(id);
      if (index >= 0) {
        console.log(index);

        selectedTasks.splice(index, 1);
      }
      console.log(selectedTasks);
    };
    return (
      <div>
        {data.map((task) => (
          <OutlinedCard
            key={task.id}
            taskName={task.name}
            taskId={task.id}
            showCheckBox={showCheckBox != undefined ? showCheckBox : false}
            addSelectedTask={addSelectedTask}
            removeSelectedTask={removeSelectedTask}
          />
        ))}
      </div>
    );
  }
);

export default ListTask;
