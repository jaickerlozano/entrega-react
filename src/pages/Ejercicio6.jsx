/**6. Temporizador con Inicio, Pausa y Reinicio
Objetivo del ejercicio: Practicar manejo de eventos, funciones de temporización y manipulación del
DOM.
Ejercicio:
Crea una página con un temporizador que comience en 00:00:00. Incluye tres botones: “Iniciar”, “Pausar”
y “Reiniciar”.
• Al hacer clic en “Iniciar”, el temporizador debe comenzar a contar los segundos, minutos y horas.
• “Pausar” detiene el conteo pero mantiene el tiempo actual.
• “Reiniciar” pone el temporizador en 00:00:00. */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Ejercicio6() {
    // 1. ESTADO: Solo necesitamos saber si corre y cuánto tiempo lleva acumulado
    const [time, setTime] = useState(0); // Tiempo en milisegundos (o décimas)
    const [isRunning, setIsRunning] = useState(false);

    // 2. EL MOTOR (useEffect)
    useEffect(() => {
        let interval;

        if(isRunning) {
            // Si está corriendo, se crea el intervalo
            interval = setInterval(() => {
                // Actualizamos el tiempo basándonos en el anterior
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else {
            // Si no está corriendo, limpiamos el intervalo (Pausa automática)
            clearInterval(interval);
        }
        // CLEANUP: Muy importante. Si el componente se desmonta o isRunning cambia,
        // limpiamos el intervalo para no tener "fugas de memoria" o relojes locos.
        return () => clearInterval(interval);
    }, [isRunning]); // Este efecto se ejecuta cada vez que 'isRunning' cambia

    // 3. HANDLERS
    const handleStart = () => setIsRunning(true);
    const handlePause = () => setIsRunning(false);
    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    };

    // 4. FORMATEO (Esto es solo visual, no es estado)
    const formatTime = (milliseconds) => {
        let totalSeconds = Math.floor(milliseconds / 1000);
        
        // Calculamos horas, minutos y segundos
        let seg = totalSeconds % 60;
        let min = Math.floor((totalSeconds / 60) % 60);
        let hour = Math.floor((totalSeconds / 3600) % 24);

        // Agregamos .toString().padStart(2, '0') para que se vea "00"
        return `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
    };
    
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
            <div className="flex flex-col items-center gap-6 bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-gray-800">Ejercicio 6</h2>
                <p className="text-gray-500">Temporizador con Inicio, Pausa y Reinicio</p>
                
                {/* Eliminamos el 'value={time}' que sobraba aquí */}
                <div 
                    id="watch" 
                    className="bg-gray-800 text-white font-mono text-4xl font-semibold py-4 px-8 rounded-lg shadow-inner tracking-widest"
                >
                    {formatTime(time)}
                </div>

                <div className="buttons-control flex gap-2 w-full justify-center">
                    <button 
                        disabled={isRunning} 
                        onClick={handleStart} 
                        className="bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white font-bold py-2 px-4 rounded transition-colors w-1/3"
                    >
                        Inicio
                    </button>
                    <button 
                        disabled={!isRunning} // Detalle PRO: Deshabilitar pausa si no está corriendo
                        onClick={handlePause} 
                        className="bg-yellow-500 hover:bg-yellow-600 disabled:opacity-50 text-white font-bold py-2 px-4 rounded transition-colors w-1/3"
                    >
                        Pausar
                    </button>
                    <button 
                        onClick={handleReset} 
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors w-1/3"
                    >
                        Reinicio
                    </button>
                </div>

                <div className="pt-4 border-t border-gray-200 w-full text-center">
                    <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
                        ← Volver al inicio
                    </Link>
                </div>
            </div>
        </div>
    )
}