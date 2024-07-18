import React, {useState} from 'react'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Property from './pages/Property'
import Contact from './pages/Contact'
import Checkout from './pages/Checkout'
import Cart from './pages/Cart'
import Sidebar from './components/Sidebar'
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  React.useEffect (() => {
    AOS.init (
      {
        // duration: 2000,
        // easing: "ease",
        // once: true,
        // mirror: false,
        // anchorPlacement: "top-bottom",
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
        offset: 100,
      }
    );
    AOS.refresh();
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<SignIn />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/About' element={<About />} />
        <Route path='/Property' element={<Property />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Checkout' element={<Checkout />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Sidebar' element={<Sidebar />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App