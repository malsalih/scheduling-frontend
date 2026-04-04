import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import BookingWidget from './components/BookingWidget'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Categories from './components/Categories'
import FeaturedProviders from './components/FeaturedProviders'
import DoctorProfile from './components/DoctorProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <div dir="rtl" className='bg-background flex flex-col'>
            <Navbar className=""/>
            <HeroSection className=""/>
            <Categories/>
            <FeaturedProviders/>
            {/* <BookingWidget serviceType="doctor" serviceId={1} /> */}
          </div>
        }/>

        <Route path='/login' element={
          <Login/>
        }/>

        <Route path='/register' element={
          <Register/>
        }/>

        <Route path='/doctor' element={
          <div dir="rtl" className='bg-background flex flex-col'>
            <Navbar className=""/>
            <DoctorProfile/>
          </div>
        }/>

        <Route path="/provider-dashboard" element={
          <div dir="rtl" style={{textAlign: 'center', marginTop: '50px'}}>
            <h2>مرحباً بك في لوحة تحكم المزود 🛠️</h2>
            <p>سيتم تصميم هذه الصفحة قريباً...</p>
          </div>
        } />

      </Routes>
    </BrowserRouter>
  )
}

export default App
