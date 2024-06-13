import {useState} from 'react'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<SignIn />} />
        <Route path='/Register' element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App