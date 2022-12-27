import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'
import Formulario from './components/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='container mx-auto mt-20'>
    <Header />

    <div className='mt-12 md:flex '>
      <Formulario />
      <ListadoPacientes />
    </div>
    </div>
  )
}

export default App
