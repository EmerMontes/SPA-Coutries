import style from './head.module.css'

export const Head = ()=>{
    return(
    <div className={style.head}>
        <div className={style.title}>
         <h3 className={style.hh}>CountriesPage</h3>

        </div>
        <div className={style.boton}>
            <button>🌙</button>
        </div>
    
    </div>
    )
}