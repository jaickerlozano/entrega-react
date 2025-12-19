// src/pages/Landing.jsx
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="flex flex-col items-center gap-6 mt-10">
            <h1 className="text-3xl font-bold text-blue-800">Entrega de Ejercicios - Jaicker Lozano</h1>
            <p className="text-gray-600">Selecciona un ejercicio para ver la solución:</p>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 w-full max-w-2xl">
                <Link to="/ejercicio1" className="p-4 bg-white rounded shadow hover:bg-blue-50 transition">
                    1. Cambiador de Color de Fondo
                </Link>
                <Link to="/ejercicio2" className='p-4 bg-white rounded shadow hover:bg-blue-50 transition'>
                    2. Contador de Clicks
                </Link>
                <Link to="/ejercicio3" className='p-4 bg-white rounded shadow hover:bg-blue-50 transition'>
                    3. Lista Dinámica
                </Link>
                <Link to="/ejercicio4" className='p-4 bg-white rounded shadow hover:bg-blue-50 transition'>
                    4. Filtro de Búsqueda en Tiempo Real
                </Link>
                <Link to="/ejercicio5" className='p-4 bg-white rounded shadow hover:bg-blue-50 transition'>
                    5. Calculadora Sencilla
                </Link>
                <Link to="/ejercicio6" className='p-4 bg-white rounded shadow hover:bg-blue-50 transition'>
                    6. Temporizador con Inicio, Pausa y Reinicio
                </Link>
                <Link to="/ejercicio7" className='p-4 bg-white rounded shadow hover:bg-blue-50 transition'>
                    7. Generador de Contraseñas Aleatorias
                </Link>
                <Link to="/ejercicio8" className='p-4 bg-white rounded shadow hover:bg-blue-50 transition'>
                    8. Contador de Palabras y Caracteres
                </Link>
                <Link to="/ejercicio9" className='p-4 bg-white rounded shadow hover:bg-blue-50 transition'>
                    9. Lista de Tareas con LocalStorage
                </Link>
                {/* Aquí pones los Links a los demás ejercicios */}
        </div>
    </div>
    );
};

export default Landing;