/**Objetivo del ejercicio: Practicar generación de cadenas aleatorias y uso de formularios.
Ejercicio:
Crea una página con un campo de entrada para especificar la longitud de una contraseña y un botón que
diga “Generar contraseña”.
• Al hacer clic en el botón, se debe mostrar una contraseña generada aleatoriamente usando
letras, números y caracteres especiales.
• Si la longitud es menor a 4 o el campo está vacío, muestra un mensaje de error indicando que la
longitud debe ser mayor o igual a 4.*/

import { useState } from "react"; // Ojo: borré 'use', solo necesitas useState
import { Link } from "react-router-dom";

export default function Ejercicio7() {
    const [longitud, setLongitud] = useState(''); 
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); 

    // Esta función maneja el cambio en el input
    function handleChange(e) {
        const entrada = e.target.value;

        // 1. SI ESTÁ VACÍO: Permitimos borrar todo
        if (entrada === '') {
            setLongitud('');
            setError(''); 
            return;
        }

        // 2. VALIDACIÓN DE TIPO: Solo permitimos dígitos (sin letras)
        // Si intenta escribir una letra, no hacemos nada (no actualizamos)
        if (!/^\d+$/.test(entrada)) return;

        // 3. ACTUALIZAMOS EL ESTADO SIEMPRE (Para que el usuario vea lo que escribe)
        setLongitud(entrada);

        // 4. VALIDACIÓN DE REGLAS (Aquí es donde mostramos el error visualmente)
        // Pero NO bloqueamos la escritura.
        if (Number(entrada) < 4) {
            setError('La longitud debe ser mayor o igual a 4');
        } else {
            setError('');
        }
    }

    function handleGenerarPassword() {
        // Validación final antes de generar: Si hay error o está vacío, no hacemos nada
        if (error || !longitud || Number(longitud) < 4) {
            setError('Por favor define una longitud válida (mínimo 4)');
            return;
        }

        let contrasenia = '';
        let chars = 'abcdefghijklmnopqrstuvwxyz';
        chars = chars + chars.toLocaleUpperCase() + '0123456789' + '.,;:-_+*/¡!?¿#$%/()=';
        
        for (let i = 0; i < Number(longitud); i++) {
            const randomChar = chars.charAt(Math.floor(Math.random() * chars.length));
            contrasenia += randomChar;
        }
        setPassword(contrasenia);
        setError('');
    }
    
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
            <div className="flex flex-col items-center gap-6 bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-gray-800">Ejercicio 7</h2>
                <p className="text-gray-500">Generador de Contraseñas</p>
                
                <div className="flex flex-col gap-2 w-full">
                    <label className="text-gray-700 font-bold text-sm" htmlFor="entrada">
                        Longitud de la contraseña
                    </label>
                    <input 
                        value={longitud}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                        placeholder="Ej: 12"
                        type="text" // Mejor control manual con text
                        inputMode="numeric"
                        id="entrada" 
                    />
                    
                    {/* Botón deshabilitado si hay error para mejor UX */}
                    <button 
                        onClick={handleGenerarPassword} 
                        // Deshabilitamos si hay error o si está vacío
                        disabled={!!error || !longitud}
                        className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded transition-colors mt-2"
                    >
                        Generar Contraseña
                    </button>
                </div>

                <div className="w-full text-center min-h-[3rem]">
                    {error && (
                        <p className="text-red-500 font-bold text-sm animate-pulse mt-2">
                            ⚠️ {error}
                        </p>
                    )}
                    
                    {password && !error && (
                        <div className="mt-4 p-4 bg-gray-100 rounded-lg break-all border border-gray-200">
                            <p className="text-sm text-gray-500 mb-1">Tu contraseña es:</p>
                            <p className="text-xl text-green-600 font-mono font-bold select-all">
                                {password}
                            </p>
                        </div>
                    )}
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