import { useNavigate } from "react-router-dom";
import style from './Landing.module.css'

export const Landing = ()=>{
  const navigate = useNavigate()
    return(
        <>
      <div>
        <a href="/home" >
          <img src='./imagenes/world.gif' className={style.logo} alt="Country logo" />
        </a>
      </div>
      <h1>Welcome</h1>
      <p> This is a SPA based on countries api.<br/>
       Here we use React, Redux-toolkit, and navito css for the front-end also we use sequelize and postgresSQL for the back-end. 
      </p>
      <div >
        <button onClick={() => (navigate('/home'))}>
          Login
        </button>
      </div>

    </>
    )
}