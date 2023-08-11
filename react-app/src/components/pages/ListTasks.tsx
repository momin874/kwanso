import React from "react";
import OutlinedCard from "../molecules/OutlinedCard";
interface ListTasksProps {
  showCheckBox?: boolean;
  handleCheckBox?: (id: number) => void;
}
const ListTask: React.FC<ListTasksProps> = ({
  showCheckBox,
  handleCheckBox,
}) => {
  const tasks = (() => {
    return JSON.parse(localStorage.getItem("tasks") ?? "[]");
  })();

  const data = tasks instanceof Array ? tasks : [];

  return (
    <div>
      {data.map((task) => (
        <OutlinedCard
          taskName={task.name}
          taskId={task.id}
          showCheckBox={showCheckBox != undefined ? showCheckBox : false}
          handleCheckBoxChange={showCheckBox ? handleCheckBox : undefined}
        />
      ))}
    </div>
  );
};

export default ListTask;
