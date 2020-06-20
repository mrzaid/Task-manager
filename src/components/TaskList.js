import React, { useContext } from "react";
import { TaskListContext } from "../contexts/TaskListContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);

  return (
    <div>
{tasks.length ? (<ul className="list">
        {tasks.map(task => {
          return <Task task={task} key={task.id} />;
        })}
      </ul>
):(

<div className="no-tasks">No Tasks yet Please do something instead of wasting your time</div>
)}
      
      

    </div>
  );
};

export default TaskList;
