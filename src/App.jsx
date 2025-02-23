import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Layout } from './components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Navbar />
      <Layout/>
    </div>
  )
}

export default App
