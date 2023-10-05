import { createSlice } from "@reduxjs/toolkit";

export const countrySlice = createSlice({
    name: 'country',
    initialState:{
        page:0,
        country:[],
        input:''
    },
    reducers:{
        setCountry:(state,action)=>{
          //  console.log(action.payload)
            state.country = action.payload.country
            state.page= action.payload.page
        },
        reloadPage:(state,action)=>{
            state.page = 0
        },
        setCountryByName:(state,action)=>{
            //console.log(action)
            state.country = action.payload.country
        },
        reloadInpu :(state,action)=>{
            state.input = action.payload.input
        }
    }
    

})
export const { setCountry,reloadPage, setCountryByName,reloadInpu } = countrySlice.actions
