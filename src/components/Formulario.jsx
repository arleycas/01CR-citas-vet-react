import React, { useState, useEffect } from 'react'
import Error from './Error';

export default function Formulario({setPacientes, arrPacientes, objPacienteEditable, setObjPacienteEditable}) {

  const [nombrePet, setNombrePet] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fechaAlta, setFechaAlta] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(objPacienteEditable).length > 0) {
      setNombrePet(objPacienteEditable.nombrePet);
      setPropietario(objPacienteEditable.propietario)
      setEmail(objPacienteEditable.email)
      setFechaAlta(objPacienteEditable.fechaAlta)
      setSintomas(objPacienteEditable.sintomas)
    }

  }, [objPacienteEditable])

  const generarId = () => {
    return `${Math.random().toString(36).substring(2)}${Date.now().toString(36)}`
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion formulario
    if([nombrePet, propietario, email, fechaAlta, sintomas].includes('')) {
      return setError(true);
    }

    setError(false);

    // Objeto paciente
    const objPaciente = {
      nombrePet,
      propietario,
      email,
      fechaAlta,
      sintomas,
    }

    // Si dentro del estado "paciente" hay un objeto, significa que estamos editando
    if (objPacienteEditable.id) {
      objPaciente.id = objPacienteEditable.id;
      const arrPacientesActualizados = arrPacientes.map(pacienteState => pacienteState.id === objPacienteEditable.id ? objPaciente : pacienteState);
      // console.log(arrPacientesActualizados);
      setPacientes(arrPacientesActualizados);
      setObjPacienteEditable({});
    } else {

      // Nuevo registro
      objPaciente.id = generarId();
      setPacientes([...arrPacientes, objPaciente]);
    }


    // Limpiar form
    setNombrePet('');
    setPropietario('');
    setEmail('');
    setFechaAlta('');
    setSintomas('');
  }

  return (
    <div 
      className='md:w-1/2 lg:w-2/5 mx-5'>

      <h2 
        className='font-black text-3xl text-center'>
          Formulario
      </h2>
    
      <p
        className='text-lg mt-5 text-center mb-10'>
          Añade pacientes y
          <span
            className='text-indigo-600 font-bold'> Administralos</span> 
      </p>

      <form
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
        onSubmit={handleSubmit}>

        { error && <Error>Todos los campos son obligatorios</Error> }

        <div className='mb-5'>
          <label 
            className='block text-gray-700 uppercase font-bold' 
            htmlFor='inpMascota'>Nombre mascota
          </label>

          <input
            id='inpMascota'
            type='text'
            placeholder='Nombre mascota'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded'
            value={nombrePet}
            onChange={(e)=> {setNombrePet(e.target.value)}} />
        </div>

        <div className='mb-5'>
          <label 
            className='block text-gray-700 uppercase font-bold' 
            htmlFor='inpPropietario'>Nombre propietario
          </label>

          <input
            id='inpPropietario'
            type='text'
            placeholder='Nombre propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded'
            value={propietario}
            onChange={(e)=> {setPropietario(e.target.value)}} />
        </div>

        <div className='mb-5'>
          <label 
            className='block text-gray-700 uppercase font-bold' 
            htmlFor='inpEmail'>Email
          </label>

          <input
            id='inpEmail'
            type='email'
            placeholder='Email contacto propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded'
            value={email}
            onChange={(e)=> {setEmail(e.target.value)}} />
        </div>

        <div className='mb-5'>
          <label 
            className='block text-gray-700 uppercase font-bold' 
            htmlFor='inpFechaAlta'>Fecha de alta
          </label>

          <input
            id='inpFechaAlta'
            type='date'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded'
            value={fechaAlta}
            onChange={(e)=> {setFechaAlta(e.target.value)}} />
        </div>

        <div className='mb-5'>
          <label 
            className='block text-gray-700 uppercase font-bold' 
            htmlFor='taSintomas'>Síntomas
          </label>

          <textarea
            id='taSintomas'
            type='date'
            placeholder='Describe los síntomas'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded'
            value={sintomas}
            onChange={(e)=> {setSintomas(e.target.value)}} />
        </div>

        <input 
          type="submit"
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer hover:bg-indigo-700 transition-all rounded-lg'
          value={objPacienteEditable.id ? 'Editar paciente' : 'Agregar paciente'} />

      </form>

    </div>
  )
}
