import React from 'react'
import {Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTask, doneTask } from '../../JS/Actions/TaskAction.js'
import './Task.css'
import Edit from '../Edit/Edit'

const Task = ({task}) => {
  const dispatch = useDispatch()
  return (
    <div className='task-container'>
        <span className={task.isDone ? "done" : null}>{task.text}</span>
        <Edit task={task}/>
        <Button variant="primary" onClick={()=>dispatch(deleteTask(task.id))}>delete</Button>
        <Button variant="primary" onClick={()=>dispatch(doneTask(task.id))}>{task.isDone ? "undone" : "Done"}</Button>
    </div>
  )
}

export default Task;