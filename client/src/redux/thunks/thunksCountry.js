import { setCountry,setCountryByName,reloadInpu } from "../countrySlice"
import axios from 'axios'

export const getCountryByName=(value, page=0)=>{
 
    return async (dispatch, getCountryByName)=>{
        try {
            const {data} = await axios.get(`http://localhost:3001/countries/name?name=${value}`)
             console.log(data)
             console.log(length)
             if (data.length === 0) {
                alert('pais no encontrado') 
                dispatch(reloadPage())
                dispatch(reloadInput(''))
             }
           
             dispatch( setCountryByName({country: data, page: page}))
             
        } catch (error) {
            console.log('error getCountryByName')
        }

    }
}

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
 export const reloadInput=(value)=>{
    
    return async (dispatch, reloadInput)=>{
         dispatch( reloadInpu({input: value}))
        
     }
 }
