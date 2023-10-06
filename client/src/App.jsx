import { Route, Routes } from 'react-router-dom'
import  {Landing}  from './view/Landing/Landing'
import {Home} from './view/Home/Home'
import {Detail} from './view/Detail/Detail'
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
    <Route path='/detail/:ID' element={<Detail/>}/>

   </Routes>
   <Footer/>
   
  </div>)
}

export default App
