import { setCountry } from "../countrySlice"
import axios from 'axios'



export const getCountry =(page=1)=>{
 
    return async (dispatch, getCountry)=>{
        try {
            const {data}= await axios.get(`http://localhost:3001/countries?page=${page}`)
            dispatch( setCountry({country: data,page: page}))
        } catch (error) {
            console.log('error')
        }

    }
}
export const reloadPage=(page=1)=>{
    
    return async (dispatch, reloadPage)=>{
        try {
            const {data}= await axios.get(`http://localhost:3001/countries?page=${page}`)
            dispatch( setCountry({country: data,page: page}))
        } catch (error) {
            console.log('error')
        }

    }
}
