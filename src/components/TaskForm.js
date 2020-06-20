import React, { useState, useContext, useEffect } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'

const TaskForm = () => {
  const { addTask, clearList,editItem,editTask } = useContext(TaskListContext)
  const [title, setTitle,] = useState('')

  const handleSubmit = e => {
    e.preventDefault();

    if(editItem===null){
      addTask(title);
      setTitle('');
    }
    else{
      editTask(title,editItem.id)
    }
  }
  
  //rerender the function when state is changed
  //if edit item is updated the useeffect event will run on its own
useEffect(()=>{
if(editItem !== null){
  setTitle(editItem.title)
  console.log(editItem);
}
else{setTitle("")}
},[editItem])
  const handleChange = e => {
    setTitle(e.target.value)
  }



  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Add Task..."
        value={title}
        onChange={handleChange}
        required
        className="task-input"
      />
      <div className="buttons">


        <button type="submit" className="btn add-task-btn">
          {editItem ? 'Edit Task':'Add Task'} 
        </button>


        <button className="btn clear-btn" onClick={clearList}>
          Clear
        </button>


      </div>
    </form>
  )

  }
export default TaskForm
