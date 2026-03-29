import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import BookingWidget from './components/BookingWidget'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div dir="rtl" style={{ backgroundColor: '#f4f7f6', minHeight: '100vh', padding: '20px' }}>
      <BookingWidget serviceType="doctor" serviceId={1} />
    </div>
  )
}

export default App
