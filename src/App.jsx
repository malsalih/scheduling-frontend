import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import BookingWidget from './components/BookingWidget'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <div dir="rtl" style={{ backgroundColor: '#f4f7f6', minHeight: '100vh', padding: '20px' }}>
            <BookingWidget serviceType="doctor" serviceId={1} />
          </div>
        }/>

        <Route path='/login' element={
          <Login/>
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
