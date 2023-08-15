import React, { useState, useEffect } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";

interface CardProps {
  id: number;
  name: string;
  showCheckbox: boolean;
  checkBoxState?: boolean;
  addSelectedTask?: (id: number) => void;
  removeSelectedTask?: (id: number) => void;
}

const OutlinedCardContent: React.FC<CardProps> = ({
  id,
  name,
  showCheckbox,
  addSelectedTask,
  removeSelectedTask,
}) => {
  const [check, setCheck] = useState(false);
  useEffect(() => {
    if (addSelectedTask && removeSelectedTask) {
      if (check) {
        addSelectedTask(id);
      } else {
        removeSelectedTask(id);
      }
    }
  }, [check]);
  return (
    <CardContent>
      {showCheckbox && addSelectedTask && removeSelectedTask && (
        <Checkbox
          checked={check}
          onChange={() => {
            setCheck(!check);
          }}
        />
      )}
      <Typography variant="h5" component="div">
        {name}
      </Typography>
    </CardContent>
  );
};

export default OutlinedCardContent;
