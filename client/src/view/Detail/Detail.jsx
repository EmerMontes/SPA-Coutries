import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import axios from 'axios'
import style from './detail.module.css'


export const Detail =  ()=>{
    const {ID}=useParams();
    const [country,setCountry] = useState({});
    const [activity,setActivity] = useState([]);

    useEffect ( ()=> {
      try{
          axios(`http://localhost:3001/countries/${ID}`).then(({data})=>{
              console.log(data)
            if (data.city) {
                setCountry(data.city)
            }
            if (data.activity) {
                setActivity(data.activity)
            }
           })
        }catch(error){
            alert('id Not found')
        }
        console.log(country)
         return setCountry({})
    },[ID])


return(
    <div className={style.contentDetail}>

        <div className={style.detailCountry}>
        <p>
        <b>ID:  </b>
        {country.ID}
        </p>
        <img className={style.imgFlag} src={country.imgFlag} alt="" />
        </div>

        
        <div className={style.detail}>

        <h3><b>{country.name}</b></h3>

        <p>
        <b>Continent:  </b>
        {country.continent}
        </p>

        <p>
        <b>Capital:  </b>
        {country.capital}
        </p>

        <p>
        <b>Subregion:  </b>
        {country.subregion}
        </p>

        <p>
        <b>Area:  </b>
        {country.area}
        </p>

        <p>
        <b>Population:  </b>
        {country.population}
        </p>

        {activity.length === 0
         ? <b><font color="red">There is no activity</font></b>
         :<div className={style.activity}>

            <h3>Activity</h3>   
            <p>
            <b>Nombre:</b>
            {activity[0].name}
            </p>
            <p>
            <b>Difficulty:</b>
            {activity[0].difficulty}
            </p>
            <p>
            <b>Duration:</b>
            {activity[0].duration}
            </p>
            <p>
            <b>Season:</b>
            {activity[0].season}
            </p>
             </div>
            }
            </div>

            
        


    </div>
)

}