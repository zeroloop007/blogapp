import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './components/Homepage'
import Blogpage from './components/Blogpage'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar></Navbar>
     <Routes>
      <Route path='/add' element={<Blogpage/>}></Route>
      <Route path='/' element={<Homepage/>}></Route>
     </Routes>
       
    </>
  )
}

export default App
