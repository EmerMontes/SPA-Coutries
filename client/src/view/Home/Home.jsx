import { useEffect } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { getCountry, reloadPage } from "../../redux/thunks/thunksCountry"
import {Country} from '../../components/country/Country'
import { NavBar } from "../../components/navbar/Navbar"

export const Home =()=>{

 const dispatch = useDispatch()

 useEffect(()=>{
    dispatch(getCountry())
 },[]) 
 
 const {country,page } = useSelector((state)=>state.country)
 
 return ( 
  <>
    <div>
     <NavBar/>
    </div>
    <div>
          <Country/>
    </div>
     <div>
    {page !==1 && <button onClick={()=>dispatch(getCountry(page-1))}>{'<'}</button>}
    <button disabled={true}>{page}</button>
    {page !==25 ? <button disabled={country.length<10 || country.length>10} onClick={()=>dispatch(getCountry(page+1))}>{'>'}</button>
    :<button onClick={()=>dispatch(reloadPage())}>1</button>} 
    </div>
    
  </>
 )
}