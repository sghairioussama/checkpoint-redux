import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../ActionTypes/ActionTypes"



export const addTask = (NewTask) => {
    return{
        type: ADD_TASK ,
        payload: NewTask
    }
 };

export const deleteTask = (id) => {
    return{
        type: DELETE_TASK,
        payload: id
    }
};

export const doneTask = (id) => {
    return{
        type: DONE_TASK,
        payload: id,
    }
};

export const editTask = (id , NewTask )=>{
    return{
        type: EDIT_TASK,
        payload: {id, NewTask}
    }
}