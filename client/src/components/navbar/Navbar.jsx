import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import style from './navbar.module.css'
import { Country } from '../country/Country'
import { getCountryByName } from '../../redux/thunks/thunksCountry'
import { reloadPage } from '../../redux/thunks/thunksCountry'
import { reloadInput } from '../../redux/thunks/thunksCountry'

export const NavBar = ()=>{
   const dispatch = useDispatch()
    //const [input , setInput] = useState('')
   // const [cities , setCities] = useState([])
   const {input } = useSelector((state)=>state.country)
   console.log(input)

    const handleInput =(event)=>{
       const value = event.target.value
       dispatch(reloadInput(value))
       dispatch(reloadPage())
       if(value.length!==0){
       dispatch(getCountryByName(value))
       }else{
        return
       }
    }
    


  return (
    <div className={style.contentNav}>

        <input type="text"
        placeholder="🔍︎"
        value={input}
        onChange={handleInput} />

        <div>
            
            {/* { {country.map(ciudadByName=>{
                return(
                    <div key={ciudadByName.ID}>
                    <Country/>
                    </div>
                )
            }
                )} } */}
        </div>
        
        
    </div>
  )
}