import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {Button} from 'react-bootstrap'
import Task from './Task/Tasks'


const ListTasks = () => {
const [status, setStatus] = useState("All")

  const list = useSelector(state => state.listReducer.listTasks)
  
    return (
    <div>
      <Button variant="primary" onClick={()=> setStatus("All")} >all</Button>
      <Button variant="primary" onClick={()=> setStatus("DONE")} >done</Button>
      <Button variant="primary" onClick={() => setStatus("UNDONE")} >undone</Button>
        {status==="DONE"
        ?list
        .filter((el) => el.isDone === true)
        .map(el => (<Task task={el} key={el.id}/>))
        : status === "UNDONE"
        ?list
        .filter((el) => el.isDone === false)
        .map(el => (<Task  task= {el} key={el.id}/>))


        : list.map(el => (<Task  task= {el} key={el.id}/>))}


    </div>
  )
}

export default ListTasks