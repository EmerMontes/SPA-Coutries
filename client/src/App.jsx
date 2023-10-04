import { Route, Routes, useNavigate } from 'react-router-dom'
import  {Landing}  from './view/Landing/Landing'
import {Home} from './view/Home/Home'
import { Head } from './components/head/Head'
import { Footer } from './components/footer/Footer'
import './styles/index.css'


function App() {
  return (
  <div className='contenedor'>
    <Head/>
   <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='/home' element={<Home/>}/>
   </Routes>
   <Footer/>
   
  </div>)
}

export default App
