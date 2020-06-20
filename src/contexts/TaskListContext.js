import React, { createContext, useState,useEffect } from 'react'


export const TaskListContext = createContext()

const TaskListContextProvider = props => {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(initialState)
  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks))
  },[tasks])
  // Add tasks
  const addTask = title => {
    setTasks([...tasks, { title, id: Math.random()*10000 }])
  }
  
  // Remove tasks
  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }
  
  // Clear tasks
  const clearList = () => {
    setTasks([])
  }
  
   //edit task
   const [editItem,setEditItem]=useState(null)
  //find item
const findItem = id =>{
const item = tasks.find( task => task.id ===id);
setEditItem(item)
}
const editTask =  (title,id)=>{
const newTasks = tasks.map( task=>task.id===id?{title,id}:task)
setTasks(newTasks)
setEditItem(null)
}
  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearList,
        findItem,
        editItem,
        editTask,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  )
}

export default TaskListContextProvider
