import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./state/globalSlice";
import {api} from "./state/api";



const store= configureStore({
    reducer:{
        global:globalSlice,
        [api.reducerPath]:api.reducer
    },
    middleware:(getDefault) => getDefault().concat(api.middleware)
})

export default store