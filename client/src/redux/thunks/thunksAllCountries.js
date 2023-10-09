import {setAllCountries} from "../countrySlice"
import axios from 'axios'


export const getAllCountry =(page)=>{
 
    return async (dispatch, getAllCountry)=>{
        try {
            const {data}= await axios.get(`http://localhost:3001/allCountries`)
            dispatch( setAllCountries({allCountries: data}))
        } catch (error) {
            console.log('error')
            
        }

    }
}
