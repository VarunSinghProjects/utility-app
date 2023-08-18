import { createSlice } from "@reduxjs/toolkit"
import { actionsTodo } from "./todoReducer";
import { actionsNote } from "./noteReducer";

const initialState = {
    message : ""
}

 const nortificationSlice = createSlice({
    name : "nortification",
    initialState : initialState,
    reducers : {
        reset : (state, action) =>{
            state.message = ""
        }
    },
    //extraReducers using map object
    extraReducers : {
        //map objects : [key] : value
        [actionsTodo.add] : (state , action) =>{
            state.message = "Todo is added"
        },
        [actionsNote.add] : (state , action)=>{
            state.message = "Note is added"
        }
    }


    //extraReducers using builder

    // extraReducers : (builder) =>{
    //     builder.addCase(actions.add , (state, action) =>{
    //         state.message = "Todo is added"
    //     })
    // }


    // extraReducers : {
    //     "todo/add" : (state, action) =>{
    //         state.message = "Todo is added"
    //     }
    // }
});

export const nortificationReducer = nortificationSlice.reducer;

export const resetNortification = nortificationSlice.actions.reset;

export const nortificationSelector = (state) => state.nortificationReducer.message ;