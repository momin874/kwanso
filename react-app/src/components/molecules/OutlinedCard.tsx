import React from "react";
import Card from "@mui/material/Card";
import CardContent from "../atoms/CardContent";
interface OutlinedCardProps {
  taskId: number;
  taskName: string;
  showCheckBox: boolean;
  addSelectedTask?: (id: number) => void;
  removeSelectedTask?: (id: number) => void;
}

const OutlinedCard: React.FC<OutlinedCardProps> = ({
  taskId,
  taskName,
  showCheckBox,
  addSelectedTask,
  removeSelectedTask,
}) => {
  return (
    <Card variant="outlined" key={taskId}>
      <CardContent
        name={taskName}
        id={taskId}
        showCheckbox={showCheckBox}
        addSelectedTask={addSelectedTask}
        removeSelectedTask={removeSelectedTask}
      />
    </Card>
  );
};

export default OutlinedCard;
