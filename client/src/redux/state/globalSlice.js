import { createSlice} from '@reduxjs/toolkit'
/* import axios from "axios"; */

const initialState = {
    mode: "dark",
    userId: "63701cc1f03239b7f700000e",
}





export const globalSlicer = createSlice({
    name: "global",
    initialState,
    reducers:{
        setMode:(state)=>{ 
            state.mode = state.mode==='light'? 'dark' : 'light'
        }
    },
    
})

export const {setMode,} = globalSlicer.actions;

export default globalSlicer.reducer