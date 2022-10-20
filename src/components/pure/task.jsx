import React from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

const TaskComponent = ({ task }) => {
  return (
    <div className="taskListComponent">
      <div className="description">
        Name: <p>{task.name}</p>{" "}
      </div>
      <div className="description">
        Description: <p>{task.description}</p>{" "}
      </div>
      <div className="description">
        Level: <p>{task.level}</p>{" "}
      </div>
      <div className="description">
        This task is: <p>{task.completed ? "COMPLETED" : "PENDING"}</p>{" "}
      </div>
    </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
