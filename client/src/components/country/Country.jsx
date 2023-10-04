import {useSelector} from 'react-redux'
import style from './country.module.css'

export const Country =()=>{
    const {country} = useSelector((state)=>state.country)
    return (
        <div className={style.contentCountry}>
        {
            country.map(countries=>{
                return(
                    <div className={style.countries} key={countries.ID}>
                        
                        
                        <div className={style.card2}>

                        <img className={style.imgFlag} src={countries.imgFlag}/>
                        <b>Name:</b> 
                        <br />{countries.name}<br/>
                        <hr />
                        <b>Continent:</b>
                        <br />{countries.continent}
                            
                        </div>
                       
                    </div>
                )
            })
        }
        
        </div>
    )

}