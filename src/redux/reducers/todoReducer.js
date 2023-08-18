
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    todos:[
        {text:"Go to Gym at 6", completed: false},
        {text: "Study at 8", completed: true}
    ]
}

//using redux toolkit

 const todoSlice = createSlice({
    name : "todo" , 
    initialState : initialState,
    reducers : {
        setInitialState : (state, action)=>{
            state.todos = [...action.payload];
        },

        add : (state, action) => {
            state.todos.push({
                text : action.payload,
                completed : false
            })
        },

        toggle : (state, action) =>{
            state.todos.map((todo , id)=> {
                if(id === action.payload){
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        }
    }
})

export const todoReducer = todoSlice.reducer;

export const actionsTodo = todoSlice.actions;

//selectors
export const todoSelector = (state) => state.todoReducer.todos;

// using redux

// export function todoReducer(state=initialState, action){

//     switch(action.type){
//         case ADD_TODO:
//             return {
//                 ...state,
//                 todos:[
//                     ...state.todos,
//                     {
//                         text : action.text,
//                         completed: false
//                     }
//                 ]
//             }
//         case TOGGLE_TODO:
//             return{
//                 ...state,
//                 todos: state.todos.map((todo, i)=>{
//                     if(i==action.index){
//                         todo.completed=!todo.completed
//                     }
//                     return todo;
//                 })
//             }
//         default:
//             return state;
//     }
// }