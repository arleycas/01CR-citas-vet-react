import { useEffect } from 'react'
import Paciente from './Paciente'

function ListadoPacientes({arrPacientes, setObjPacienteEditable, eliminarPaciente}) {

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto'>
      {
        arrPacientes && arrPacientes.length ? (
          <>
            <h2 
              className='font-black text-3xl text-center'>
                Listado Pacientes ({arrPacientes.length})
            </h2>

            <p className='text-xl mt-5 mb-10 text-center'>
              Administra tus pacientes y citas
              <span className='text-indigo-600 font-bold'> Pacientes y Citas</span>
            </p>

            {
              arrPacientes.map((objPaciente) => (
                <Paciente 
                  key={objPaciente.id}
                  objPaciente={objPaciente} 
                  setObjPacienteEditable={setObjPacienteEditable}
                  eliminarPaciente={eliminarPaciente} />
              ))}
          </>
        ) : (
          <>
            <h2 
              className='font-black text-3xl text-center'>
                No hay pacientes
            </h2>

            <p className='text-xl mt-5 mb-10 text-center'>
              Comenza agregando pacientes
              <span className='text-indigo-600 font-bold'> y apareceran en este lugar</span>
            </p>
          </>
        )
      }
    </div>

  )  
}

export default ListadoPacientes