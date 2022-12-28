import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';

export default function Paciente({objPaciente, setObjPacienteEditable, eliminarPaciente}) {

  const { nombrePet, propietario, email, fechaAlta, sintomas, id } = objPaciente;

  const handleEliminar = () => {
    console.log('Eliminando', id);

    Swal.fire({
      title: 'Seguro?',
      text: "No podrá deshacerlo",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarPaciente(id);
        Swal.fire(
          'Eliminado!',
          `Tu paciente ${nombrePet} fue borrado 💀`,
          'success'
        )
      }
    })
  }

  return (
    <div className='mx-5 my-5 py-5 px-10 bg-white shadow-md rounded-xl'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Nombre:
        <span className='font-normal normal-case'> {nombrePet}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Propietario:
        <span className='font-normal normal-case'> {propietario}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Email:
        <span className='font-normal normal-case'> {email}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Fecha de alta:
        <span className='font-normal normal-case'> {fechaAlta}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Síntomas:
        <span className='font-normal normal-case'> {sintomas}</span>
      </p>

      <div
        className='flex justify-between mt-10'>
        <button
          type='button'
          className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
          onClick={()=> setObjPacienteEditable(objPaciente)} >
            Editar
        </button>

        <button
          type='button'
          className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
          onClick={handleEliminar}>
          Eliminar
        </button>
      </div>
    </div>
  )
}
