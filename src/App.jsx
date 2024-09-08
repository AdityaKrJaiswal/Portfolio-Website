import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Showcase from './components/Showcase'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {Toaster} from'react-hot-toast';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-black text-white'>

      <Navbar/>
      <Home/>
      <Showcase/>
      <Skills/>
      <Contact/>
      <Footer/>
      
    </div>
    <Toaster/>
    </>
  )
}

export default App
