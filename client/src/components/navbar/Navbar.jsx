import { getCountry, getCountryByName } from '../../redux/thunks/thunksCountry'
//import { reloadPage } from '../../redux/thunks/thunksCountry'
import { reloadInput } from '../../redux/thunks/thunksCountry'
import {useDispatch, useSelector} from 'react-redux'
import style from './navbar.module.css'
import { Link } from 'react-router-dom'


export const NavBar = ()=>{
   const dispatch = useDispatch() 
   const {input} = useSelector((state)=>state.country)
  
    const handleInput =(event)=>{
       const value = event.target.value
       dispatch(reloadInput(value))
       if(value.length!==0){
       dispatch(getCountryByName(value))
       }else{
        return dispatch(getCountry())
       }
    }
    
  return (
    <div className={style.contentNav}>
       <input type="text"
        placeholder="🔍︎"
        value={input}
        onChange={handleInput} />
        

        <div className={style.allSelect}>
    
            <select name="continent" id="continent" defaultValue="">
             <option  disabled value="">Filter by continent</option>
             <option value="Atartica">Antartica</option>
             <option value="Africa">Africa</option>
             <option value="Asia">Asia</option>
             <option value="Europe">Europe</option>
             <option value="Oceania">Ocenia</option>
             <option value="North America">North America</option>
             <option value="South America">South America</option>
            </select>

            <select name="activity" id="activity" defaultValue="">
                <option value="" disabled> Filter by actividad</option>
                <option value="has activity">Has activity</option>
                <option value="has not activity">Does not Have activity</option>
            </select>

            <select name="order" id="order" defaultValue="">
                <option value="" disabled>Order</option>
                <option value="ascendente">A - Z</option>
                <option value="descendente">Z - A</option>
                <optgroup label='Population size'>
                <option value="mayoramenor">1-10</option>
                <option value="menoramayor">10-1</option>
                </optgroup>
             </select>
             <Link to={'/createActivity'}><button>Create Activity</button></Link>
        </div>


    </div>
  )
}