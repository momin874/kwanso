import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";

interface CardProps {
  id: number;
  name: string;
  showCheckbox: boolean;
  handleCheckboxChange?: (id: number) => void;
}

const OutlinedCardContent: React.FC<CardProps> = ({
  id,
  name,
  showCheckbox,
  handleCheckboxChange,
}) => {
  return (
    <CardContent>
      {showCheckbox && handleCheckboxChange && (
        <Checkbox checked={false} onChange={() => handleCheckboxChange(id)} />
      )}
      <Typography variant="h5" component="div">
        {name}
      </Typography>
    </CardContent>
  );
};

export default OutlinedCardContent;
