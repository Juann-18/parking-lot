import { useForm } from 'react-hook-form'
import {registerRequest} from '../api/auth.js'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { format } from 'date-fns';

export const RegisterPages = () => {
  const { register, handleSubmit } = useForm()

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (values) => {
    try {
      console.log("datos del values",values)
      const res = await registerRequest(values);
      
      Swal.fire({
        title: "Se registro correctamente",
        icon: "success",
      });
      navigate('/')
  } catch (error) {
    if (error.response && error.response.status === 409) {
      const formattedEntryTime = format(new Date(error.response.data.fecha), 'dd/MM/yyyy HH:mm');
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        text: `Hora de entrada: ${formattedEntryTime}`,
      });
      navigate('/')
  } 
  }
  });

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex items-center justify-center flex-col bg-white shadow-xl p-10 rounded-md w-96 h-80">
        <form 
        onSubmit={onSubmit}
        >
          <p className="text-xl font-serif">Ingrese la placa</p>
          <input type="text" {...register('carPlate', { required: true })} 
          className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 my-2"/>
          <p className="text-xl font-serif">Color del vehiculo</p>
          <input 
          className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 my-2"
          type="text" {...register('color', { required: true })} 
          />
          <button className="bg-green-500 text-white px-4 py-2 rounded-md w-full hover:bg-green-600" type="submit">Registrar</button>
        </form>
      </div>
    </div>
  )
}