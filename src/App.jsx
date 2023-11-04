import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './Pages/Shared/NavBar/NavBar'
import Footer from './Pages/Shared/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container mx-auto'>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App