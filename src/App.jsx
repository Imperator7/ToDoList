import React, { useState } from 'react'
import AddTask from './components/AddTask'
import TaskItem from './components/TaskItem'
import "./App.css"

const App = () => {
  const [toDos, setToDos] = useState([])

  const handleAdd = (task) => {
    if (!task) {
      return;
    } 
    const taskObj = {
      title: task,
      id: toDos.length + 1
    }
    const newTodos = [...toDos, taskObj]
    setToDos(newTodos)
  }

  return (
    <div className='container'>
      <h2 style={{marginBottom: "5px"}}>Task List</h2>
      <AddTask handleAdd={handleAdd}/>
      <TaskItem toDos={toDos}/>
    </div>
  )
}

export default App