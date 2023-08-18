import {todoReducer} from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";
import { configureStore } from "@reduxjs/toolkit";
import { nortificationReducer } from "./reducers/nortificationReducer";
import { loggerMiddleware } from "./middlewares/loggerMiddleware";

// const result = combineReducers({
//     todoReducer : todoReducer,
//     noteReducer : noteReducer
// })


export const store = configureStore({
    reducer :{
        todoReducer : todoReducer,
        noteReducer : noteReducer,
        nortificationReducer : nortificationReducer
    },
    middleware : [
        loggerMiddleware
    ]
}) 

