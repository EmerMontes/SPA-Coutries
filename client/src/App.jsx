import { ActivityCreate } from './view/createActivity/ActivityCreate'
import { AllActivity } from './view/allActivity/AllActivity'
import { Footer } from './components/footer/Footer'
import  {Landing}  from './view/Landing/Landing'
import { Route, Routes } from 'react-router-dom'
import { Head } from './components/head/Head'
import {Detail} from './view/Detail/Detail'
import {Home} from './view/Home/Home'
import './styles/index.css'


function App() {
  return (
  <div className='contenedor'>
    <Head/>
   <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/detail/:ID' element={<Detail/>}/>
    <Route path='/createActivity' element={<ActivityCreate/>}/>
    <Route path='/allActivity' element={<AllActivity/>}/>

   </Routes>
   <Footer/>
   
  </div>)
}

export default App
