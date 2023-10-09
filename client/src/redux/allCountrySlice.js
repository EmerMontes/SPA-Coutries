
import { createSlice } from "@reduxjs/toolkit";

export const allCountrySlice = createSlice({
    name: 'allCountry',
    initialState:{
        allCountry:[],
    },
    reducers:{
        setAllCountry:(state,action)=>{
            console.log(action.payload)
            state.allCountry = action.payload.country
            console.log(state.allCountry)
         },
    }
})