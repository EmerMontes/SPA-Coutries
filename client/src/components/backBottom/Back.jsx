import { Link } from 'react-router-dom'

export const Back =()=>{

  return (
    <div>
       <Link to={'/home'}>
        <button>
            Back
        </button>
       </Link>

    </div>


  )

}