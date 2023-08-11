import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ListTasks from "./components/pages/ListTasks";
import CreateTask from "./components/pages/CreateTask";
import BulkDelete from "./components/pages/BulkDelete";
const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/list-tasks" element={<ListTasks />} />
      <Route path="/" element={<Navigate to="/list-tasks" replace />} />
      <Route path="/create-task" element={<CreateTask />} />
      <Route path="/bulk-delete" element={<BulkDelete />} />
    </Routes>
  );
};

export default AppRoutes;
