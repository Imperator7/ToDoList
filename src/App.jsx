import React, { useState } from 'react'
import AddTask from './components/AddTask'
import TaskItem from './components/TaskItem'
import "./App.css"

let id = 1

const App = () => {
  const [toDos, setToDos] = useState([])
  
  const handleAdd = (task) => {
    if (!task) {
      return;
    } 
    const taskObj = {
      title: task,
      id: id
    }
    id += 1

    const newTodos = [...toDos, taskObj]
    setToDos(newTodos)
  }

  const handleDel = (id) => {
    const DelTodos = toDos.filter((task) => task.id !== id)
    setToDos(DelTodos)
  }

  return (
    <div className='container'>
      <h2 style={{marginBottom: "5px"}}>Task List</h2>
      <AddTask handleAdd={handleAdd}/>
      <TaskItem toDos={toDos} handleDel={handleDel}/>
    </div>
  )
}

export default App