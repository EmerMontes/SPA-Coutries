import { createSlice } from "@reduxjs/toolkit";

export const countrySlice = createSlice({
    name: 'country',
    initialState:{
        country:[],
        input:'',
        error:'',
        page:0,
        allCountries:[],
    },
    reducers:{
        setCountry:(state,action)=>{
            state.country = action.payload.country
            state.page= action.payload.page
        },
        setAllCountries:(state,action)=>{
             state.allCountries = action.payload.allCountries
        },
        reloadPage:(state,action)=>{
            state.page = 0
        },
        setCountryByName:(state,action)=>{
            state.country = action.payload.country
        },
        reloadInpu :(state,action)=>{
            state.input = action.payload.input         
        },
        setError :(state,action)=>{
            state.error = action.payload.error
        },
    }   
})
export const { setCountry,reloadPage, setCountryByName,reloadInpu, setError, setAllCountries} = countrySlice.actions
