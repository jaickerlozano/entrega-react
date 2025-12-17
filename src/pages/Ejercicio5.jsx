/**5. Calculadora Sencilla
Objetivo del ejercicio: Practicar la manipulación de formularios, eventos, y lógica básica de
JavaScript.
Ejercicio:
Crea una página con dos campos de entrada de números y cuatro botones: "Sumar", "Restar",
"Multiplicar", y "Dividir".
● Al hacer clic en cualquiera de los botones, debe mostrarse el resultado de la operación en un
área de texto o debajo de los botones.
● Asegúrate de validar los datos para evitar errores (como división por cero o entradas vacías).
 */

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Ejercicio5() {
    // Usamos strings vacíos '' para que el input empiece limpio
    const [num1, setNum1] = useState(''); 
    const [num2, setNum2] = useState('');
    
    const [resultado, setResultado] = useState(null); // Empezamos en null para no mostrar nada
    const [error, setError] = useState(''); // Estado dedicado para errores

    // --- LÓGICA DE VALIDACIÓN ---
    const validarInput = (valor) => {
        // Esta Regex permite:
        // ^-?     -> Opcionalmente un guion AL PRINCIPIO
        // \d* -> Cualquier cantidad de números
        // \.?     -> Opcionalmente un punto
        // \d*$    -> Cualquier cantidad de números al final
        if (/^-?\d*\.?\d*$/.test(valor)) {
            return true;
        }
        return false;
    };

    const handleChange = (e, setNumero) => {
        const entrada = e.target.value;
        
        // Si la entrada es válida, actualizamos el estado. 
        // Si el usuario intenta escribir un segundo guion o una letra, NO hacemos nada.
        if (validarInput(entrada)) {
            setNumero(entrada);
            setError(''); // Limpiamos el error si el usuario corrige
        }
    };

    // --- OPERACIONES ---
    // Función auxiliar para validar antes de calcular
    const validarAntesDeOperar = () => {
        if (num1 === '' || num2 === '') {
            setError('Por favor ingresa ambos números');
            setResultado(null);
            return false;
        }
        return true;
    }

    function handleClickSuma() {
        if(!validarAntesDeOperar()) return;
        setResultado(Number(num1) + Number(num2));
        setError('');
    }
    
    function handleClickResta() {
        if(!validarAntesDeOperar()) return;
        setResultado(Number(num1) - Number(num2));
        setError('');
    }
    
    function handleClickMultiplicacion() {
        if(!validarAntesDeOperar()) return;
        setResultado(Number(num1) * Number(num2));
        setError('');
    }
    
    function handleClickDivision() {
        if(!validarAntesDeOperar()) return;

        // Validación específica de división por cero
        // Ojo: Number(num2) convierte el string a número para comparar
        if (Number(num2) === 0) {
            setError('No se puede dividir entre cero');
            setResultado(null);
            return;
        }

        setResultado(Number(num1) / Number(num2));
        setError('');
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
            <div className="flex flex-col items-center gap-6 bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-gray-800">Ejercicio 5</h2>
                <p className="text-gray-500">Calculadora Sencilla</p>
                
                <div className="w-full flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-700 font-bold text-sm" htmlFor="num1">
                            Número 1
                        </label>
                        <input 
                            value={num1}
                            // Pasamos la función del set correspondiente
                            onChange={(e) => handleChange(e, setNum1)}
                            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                            placeholder="0"
                            type="text" // Cambiado a text para mejor control manual
                            inputMode="numeric" // Teclado numérico en móviles
                            id="num1" 
                        />

                        <label className="text-gray-700 font-bold text-sm mt-2" htmlFor="num2">
                            Número 2
                        </label>
                        <input 
                            value={num2}
                            onChange={(e) => handleChange(e, setNum2)}
                            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                            placeholder="0"
                            type="text"
                            inputMode="numeric"
                            id="num2" 
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-2">
                        {/* Reemplacé tu clase .button-calc por clases directas de Tailwind para asegurar el estilo */}
                        <button onClick={handleClickSuma} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">Sumar (+)</button>
                        <button onClick={handleClickResta} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">Restar (-)</button>
                        <button onClick={handleClickMultiplicacion} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">Multiplicar (x)</button>
                        <button onClick={handleClickDivision} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">Dividir (/)</button>
                    </div>
                </div>

                {/* AREA DE RESULTADOS Y ERRORES SEPARADA */}
                <div className="w-full text-center min-h-[3rem]">
                    {error && (
                        <p className="text-red-500 font-bold animate-pulse">
                            ⚠️ {error}
                        </p>
                    )}
                    
                    {resultado !== null && !error && (
                        <p className="text-2xl text-green-600 font-bold">
                            Resultado: <span className="text-gray-800">{resultado}</span>
                        </p>
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

