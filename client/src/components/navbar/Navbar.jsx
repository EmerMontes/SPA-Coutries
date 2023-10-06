import {useDispatch, useSelector} from 'react-redux'
import { getCountryByName } from '../../redux/thunks/thunksCountry'
import { reloadPage } from '../../redux/thunks/thunksCountry'
import { reloadInput } from '../../redux/thunks/thunksCountry'

import style from './navbar.module.css'

export const NavBar = ()=>{
   const dispatch = useDispatch()
   const {input,error } = useSelector((state)=>state.country)
   console.log(error)
   

    const handleInput =(event)=>{
       const value = event.target.value
       dispatch(reloadInput(value))
       if(value.length!==0){
       dispatch(getCountryByName(value))
       }else{
        return dispatch(reloadPage())
       }
    }
    
  return (
    <div className={style.contentNav}>
       <input type="text"
        placeholder="🔍︎"
        value={input}
        onChange={handleInput} />

        <div>
            {error.length !== 0 && 
            <div className={style.notFound}>
              <img  className={style.imgNot}src="../../../../imagenes/notFound.png" alt="city-notfound" />
            </div>}
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