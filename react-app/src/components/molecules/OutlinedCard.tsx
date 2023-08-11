import React from "react";
import Card from "@mui/material/Card";
import OutlinedCardContent from "../atoms/CardContent";
interface OutlinedCardProps {
  taskId: number;
  taskName: string;
  showCheckBox: boolean;
  handleCheckBoxChange?: (id: number) => void;
}

const OutlinedCard: React.FC<OutlinedCardProps> = ({
  taskId,
  taskName,
  showCheckBox,
  handleCheckBoxChange,
}) => {
  return (
    <Card variant="outlined" key={taskId}>
      <OutlinedCardContent
        name={taskName}
        id={taskId}
        showCheckbox={showCheckBox}
        handleCheckboxChange={handleCheckBoxChange}
      />
    </Card>
  );
};

export default OutlinedCard;
