import './App.css'
import Footer from './components/Footer'
import { Navbar } from './components/NavBar'
import AppRouter from './router/AppRouter'

function App() {


  return (
    <>
     <Navbar/>
     <AppRouter/>
     <Footer />
    </>
  )
}

export default App
