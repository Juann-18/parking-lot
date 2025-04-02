import { useNavigate } from 'react-router-dom';

export const HomePages = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="flex items-center justify-center flex-col bg-white shadow-xl p-10 rounded-md w-96 h-80">
        <button 
        onClick={() => navigate('/register')}
        className=" bg-green-500 text-white px-4 py-2 rounded-md w-full mb-4 hover:bg-green-600">
          Ingresar Auto
        </button>
        <button 
        onClick={() => navigate('/exit')}
        className="bg-green-500 text-white px-4 py-2 rounded-md w-full hover:bg-green-600">
          Salida
        </button>
      </div>
    </div>
  
  )
}
