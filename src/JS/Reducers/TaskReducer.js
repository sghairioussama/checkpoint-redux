import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../ActionTypes/ActionTypes"

//intial state 
const intialState = {
    ListTask:[
    {id: Math.random(), description: "task1" , isDone: true},
    {id: Math.random(), description: "task2" , isDone: false},
    {id: Math.random(), description: "task3" , isDone: true},
    {id: Math.random(), description: "task4" , isDone: false},   
    ]
}
//  pure function 
const TaskReducer = (state =intialState ,{type,payload} )=>{
    switch (type) {
        case ADD_TASK:
            return{
                ...state, ListTask: [...state.ListTask,payload]
            }
        case DELETE_TASK:
            return{
                ...state, ListTask: state.ListTask.filter(el=>el.id!==payload)
            }
        case DONE_TASK:
            return{
                ...state, ListTask: state.ListTask.map((el)=> el.id === payload?{...el,isDone:!el.isDone}:el)
            }    
        case EDIT_TASK:
            return{
                ...state,ListTask: state.ListTask.map((el) =>el.id === payload.id ? { ...el, description: payload.description } : el)
            }    
            
            
    
        default:
            return  state ;
            
    }
} 
export default TaskReducer