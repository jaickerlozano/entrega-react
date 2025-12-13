// src/pages/Landing.jsx
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="flex flex-col items-center gap-6 mt-10">
      <h1 className="text-3xl font-bold text-blue-800">Entrega de Ejercicios - Jaicker Lozano</h1>
      <p className="text-gray-600">Selecciona un ejercicio para ver la solución:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
        <Link to="/ejercicio1" className="p-4 bg-white rounded shadow hover:bg-blue-50 transition">
          1. Cambiador de Color de Fondo
        </Link>
        {/* Aquí pones los Links a los demás ejercicios */}
      </div>
    </div>
  );
};

export default Landing;