import { createSlice } from "@reduxjs/toolkit";

export const countrySlice = createSlice({
    name: 'country',
    initialState:{
        page:0,
        country:[],
    },
    reducers:{
        setCountry:(state,action)=>{
            state.country = action.payload.country
            state.page= action.payload.page
        },
        reloadPage:(state,action)=>{
            state.page = 0
        }
    }
    

})
export const { setCountry,reloadPage } = countrySlice.actions
