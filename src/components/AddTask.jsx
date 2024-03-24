import React, { useEffect, useState } from 'react'

const AddTask = ({handleAdd}) => {
  const [task, setTask] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!task) {
      return;
    }
    handleAdd(task)
    setTask("")
  }

  return (
    <div className='container addtask'>
      <input type="text" value={task} placeholder='Add task here' autoFocus onChange={(e)=> {
        setTask(e.target.value)
      }} />
      <button style={{margin: "7px"}} onClick={handleSubmit}>Add Task</button>
    </div>
  )
}

export default AddTask