import React from 'react'

export default function Formulario() {
  return (
    <div 
      className='md:w-1/2 lg:w-2/5'>

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
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
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
            name='' />
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
            name='' />
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
            name='' />
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
            name='' />
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
            name='' />
        </div>

        <input 
          type="submit"
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer hover:bg-indigo-700 transition-all'
          value="Agregar paciente" />

      </form>

    </div>
  )
}
