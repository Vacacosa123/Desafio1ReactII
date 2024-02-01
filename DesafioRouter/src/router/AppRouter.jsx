import { Route, Routes} from "react-router-dom"
import Home from "../view/Home"
import Contacto from "../view/Contacto"
import NotFound from "../view/NotFound"


const AppRouter = () => {
  return (
    <div className='container'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contacto' element={<Contacto/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  </div>
  )
}

export default AppRouter