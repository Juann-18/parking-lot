import { useForm } from 'react-hook-form'
import {exitRequest} from '../api/auth.js'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { format } from 'date-fns';


const ExitPages = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm()

  const onSubmit = handleSubmit(async (values) => {
    try {
      //console.log("datos del values",values)
      const res = await exitRequest(values);
      console.log("respuesta del backend",res.data) 
      const formattedEntryTime = format(new Date(res.data.receipt.createdAt), 'dd/MM/yyyy HH:mm');
      const formattedexiTime = format(new Date(res.data.receipt.updatedAt), 'dd/MM/yyyy HH:mm');
      Swal.fire({
        icon: "success",
        title: res.data.message,
        text: `Placa: ${res.data.receipt.carPlate},
        Hora de Entrada : ${formattedEntryTime}
        Hora de Salida : ${formattedexiTime} `}); // Muestra los valores directamente
      navigate('/')
  } catch (error) {
    if (error.response && error.response.status === 404) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
      });

    } else if (error.response && error.response.status === 500) {
      alert("An error occurred on the server."); // Mensaje para errores internos
    } 
    navigate('/')
  }
  });

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex items-center justify-center flex-col bg-white shadow-xl p-10 rounded-md w-96 h-80">
        <form 
        onSubmit={onSubmit}
        >
          <p className="text-xl font-serif">Ingrese la placa</p>
          <input
          className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 my-2"
          type="text" {...register('carPlate', { required: true })} />
          <button className="bg-green-500 text-white px-4 py-2 rounded-md w-full hover:bg-green-600" type="submit">Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default ExitPages;

