import React, { useRef } from "react";
import { bulkDeleteRef } from "./ListTasks";
import ListTask from "./ListTasks";
import Button from "../atoms/Button";

const BulkDelete: React.FC = () => {
  const bulkDeleteReference = useRef<bulkDeleteRef>(null);
  const callBulkDelete = () => {
    if (bulkDeleteReference.current) {
      bulkDeleteReference.current.handleBulkDelete();
    }
  };
  return (
    <div>
      <ListTask showCheckBox={true} ref={bulkDeleteReference} />
      <Button text="delete" buttonHandler={callBulkDelete} />
    </div>
  );
};

export default BulkDelete;
