import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'
import Formulario from './components/Formulario'

function App() {
  const INITIAL = JSON.parse(localStorage.getItem('arrPacientes')) ?? [];
  const [arrPacientes, setPacientes] = useState(INITIAL);
  const [objPacienteEditable, setObjPacienteEditable] = useState({}); // Para editar el paciente
  const eliminarPaciente = (id) => {
    const arrPacientesActualizados = arrPacientes.filter(objPaciente => objPaciente.id !== id)
    setPacientes(arrPacientesActualizados)
  }
  
  useEffect(() => {
    // console.log('Componente listo o cambió Lista de Pacientes');
    localStorage.setItem('arrPacientes', JSON.stringify(arrPacientes))
  }, [arrPacientes])
  

  return (
  <div className='container mx-auto mt-20'>
    <Header
      numeros={1} />

    <div className='mt-12 md:flex '>
      <Formulario 
        setPacientes={setPacientes}
        arrPacientes={arrPacientes}
        objPacienteEditable={objPacienteEditable} 
        setObjPacienteEditable={setObjPacienteEditable} />

      <ListadoPacientes 
        arrPacientes={arrPacientes}
        setObjPacienteEditable={setObjPacienteEditable} 
        eliminarPaciente={eliminarPaciente} />
    </div>
    </div>
  )
}

export default App
