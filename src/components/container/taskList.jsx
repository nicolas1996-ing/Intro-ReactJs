import React from "react";
import { LEVELS } from "../../models/level.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {
  const defaultTask = new Task(
    "Example",
    "Default description",
    false,
    LEVELS.NORMAL
  );

  const changeState = (id) => {
    console.log("toDo: change task status");
  };
  
  return (
    <div>
      <TaskComponent task={defaultTask} />
    </div>
  );
};

export default TaskListComponent;
