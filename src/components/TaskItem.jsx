import React from 'react'

const TaskItem = ({toDos}) => {
  return (
    toDos.map((task, index) => (
        <div key={index} className='todo-item'>
            <p>Task {task.id}: {task.title} </p>
            <div>
                <button className='edit-btn'>Edit</button>
                <button className='del-btn'>Delete</button>
            </div>
        </div>
    ))
  )
}

export default TaskItem