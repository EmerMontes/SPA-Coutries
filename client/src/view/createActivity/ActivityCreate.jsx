import { getAllCountry } from "../../redux/thunks/thunksAllCountries"
import { useDispatch, useSelector } from 'react-redux'
import {Back} from '../../components/backBottom/Back'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {validate} from'./validateActivity'
import style from './create.module.css'
import axios from 'axios'
//import Select from 'react-select'



export const ActivityCreate =()=>{
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllCountry())
    },[])
    
    const navigate = useNavigate()
    const [errores, setErrores]= useState({})
    const {allCountries} = useSelector((state)=>state.country)
    const [actividad,setActividad]= useState({
        name: '',
        difficulty: '',
        duration: '',
        season: ''
    })

    const [idCountry, setIdCountry] = useState([])

    const  handleNameInput = (event)=>{
       const {name, value} = event.target
       setActividad({...actividad, [name]:value})      
       setErrores(validate({...actividad, [name]:value}))
    }

    const handleCountries = (event)=>{
        if(idCountry.includes(event.target.value)) {
          setIdCountry(idCountry.filter((city) => city !== event.target.value));
        }else{
          setIdCountry([...idCountry, event.target.value]);
        }
    } 
    const handleClick=()=>{
        setActividad({...actividad,idCountry : idCountry})
    }

    const handleSubmitActivity = async (event)=>{
        event.preventDefault()
        try {
             await axios.post('http://localhost:3001/activities',actividad)
             console.log('cumplido')   
        }catch(error) {
            alert('no se puede crear la actividad')
        }
        const result = window.confirm('activity created, do you want to create a new activity?')
        if(result){
          setActividad({name: '',duration: '',difficulty: '',season: ''})
          setIdCountry([])
          document.querySelectorAll('input[type="radio"]').forEach((radio) => {
            radio.checked = false;
          });
        }else{
          navigate('/home') 
        }
    } 

  return (
        <div className={style.contentActividad}>
            <Back/>
            <section className={style.container}>
             <header><b>Create Activity </b></header>
           
             <form className={style.form} onSubmit={handleSubmitActivity}>
             <div className={style.inputBox}>
             <input 
             value={actividad.name}
             name={'name'}
             required={true}
             placeholder="Name of the activity" 
             type="text"
             onChange={handleNameInput}
             />
             {errores.name && <span style={{color: 'red'}}>{errores.name}</span>}
             </div>
             <div className={style.column}>
              <div className={style.inputBox}>
               <label> <b>Difficulty </b></label>
               <input 
               value={actividad.difficulty}
               name='difficulty'
               onChange={handleNameInput}
               required={true}
               placeholder="lest difficult 1 - 5 more"
               type="number"
                />
               <span style={{color: 'red'}}>{errores.difficulty}</span>

              </div>
              <div className={style.inputBox}>
            <label><b>Duration: </b> (in hour)</label>
            <input 
            value={actividad.duration}
            name='duration'
            required={true}
            onChange={handleNameInput}
            type="text"
            />
            {errores.duration && <span style={{color: 'red'}}>{errores.duration}</span>}
          </div>
       </div>
       <div className={style.genderBox}>
         <label> <b>Season</b></label>
         <br />
         {errores.season && <span style={{color: 'red'}}>{errores.season}</span>}
         <div className={style.genderOption}>
         <div className={style.gender}>
            <input onChange={handleNameInput}  value='Summer' name="season" type="radio"/>
            <label>Summer</label>
          </div>
          
          <div className={style.gender}>
            <input onChange={handleNameInput}   value='Autumn' name="season"  type="radio"/>
            <label>Autumn</label>
          </div>
          <div className={style.gender}>
            <input onChange={handleNameInput}  value='Spring'  name="season"  type="radio"/>
            <label>Spring</label>
          </div>
          <div className={style.gender}>
            <input onChange={handleNameInput}  value='Winter' name='season'  type="radio"/>
            <label>Winter</label>
          </div>

        </div>
        </div>
            <label> <b>Select Countries </b> </label>
            <br />
            {idCountry.length < 1 && <span style={{color: 'red'}}>Select one or more</span> }
          <div className={style.selectBox}>
            <select  onChange={handleCountries}  value={idCountry} name='idCountry' multiple   className={style.selectt}>
                {allCountries.map(countries=>{
                    return(
                        <option key={countries.ID}
                        >{countries.name}</option>
                    ) 
                 })} 

            </select>
           
          </div>

       <button disabled={ 
        Object.keys(errores).length > 0 ||
        actividad.name.length === 0 ||
        actividad.difficulty.length === 0 ||
        actividad.duration.length === 0 ||
        actividad.season.length === 0 ||
        idCountry.length === 0} onClick={()=>handleClick()}>Create</button>
       </form>
      </section>
      <div className={style.botonAll}>
      <button className={style.all}>All activities</button>
      </div>
        </div>
    )
   
  


}