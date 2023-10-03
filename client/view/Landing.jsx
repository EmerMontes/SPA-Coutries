import { useNavigate } from "react-router-dom";

export const Landing = ()=>{
  const navigate = useNavigate()
    return(
        <>
      <div>
        <a href="/home" >
          <img src='./imagenes/world.gif' className="logo react" alt="Country logo" />
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
      <div className="card">
        <a href='https://www.linkedin.com/in/emerson-montes-422037262/' target='_blank'>
        <img  src='./imagenes/linkedin.gif' className="logo react" alt="linkedin logo" />
        </a>
      </div>

    </>
    )
}