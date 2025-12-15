/**4. Filtro de Búsqueda en Tiempo Real
Objetivo del ejercicio: Practicar la interacción entre eventos del DOM y lógica en JavaScript.
Ejercicio:
Crea una página con un campo de texto y una lista predefinida de elementos.
● Mientras el usuario escribe en el campo, la lista debe actualizarse en tiempo real para
mostrar solo los elementos que contienen el texto escrito.
Ejemplo: Si la lista contiene ["Perro", "Gato", "Pez"] y el usuario escribe "Ga", solo "Gato" debe
quedar visible */

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Ejercicio4() {
    // Definimos la lista original
    const listaOriginal = ["Perro", "Gato", "Pez", "Hormiga", "Araña", "delfín"];
    
    // Solo necesitamos UN estado: lo que el usuario escribe
    const [char, setChar] = useState('');

    // --- ESTADO DERIVADO (Calculado al vuelo) ---
    // Esto se ejecuta cada vez que 'char' cambia.
    // Si char está vacío, mostramos todo. Si no, filtramos.
    const listaFiltrada = listaOriginal.filter(palabra => 
        palabra.toLowerCase().includes(char.trim().toLowerCase())
    );

    const handleChange = (e) => {
        // Aquí solo actualizamos el input. React se encarga de recalcular
        // la listaFiltrada automáticamente en el siguiente render.
        setChar(e.target.value);
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
            <div className="flex flex-col items-center gap-4 bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-gray-800">Ejercicio 4</h2>
                <label htmlFor="texto" className="flex flex-col text-gray-600 font-bold text-md w-full">
                    🔍 Buscar
                    <input 
                        value={char}
                        onChange={handleChange}
                        type="text" 
                        id="texto" 
                        className="w-full mt-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-slate-300 shadow-sm focus:shadow"
                        placeholder="Escribe aquí..."
                    />
                </label>

                <h2 className="text-xl font-bold text-gray-800 mt-4">Lista Filtrada</h2>
                
                {/* Renderizamos la lista calculada */}
                <ul className="w-full space-y-2">
                    {listaFiltrada.length > 0 ? (
                        listaFiltrada.map((palabra, index) => (
                            <li 
                                className="font-semibold px-3 py-2 rounded bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
                                key={index}
                            >
                                {palabra}
                            </li>
                        ))
                    ) : (
                        <li className="text-gray-400 italic text-center">No se encontraron resultados</li>
                    )}

                </ul>

                <div className="pt-4 border-t border-gray-200 w-full text-center mt-4">
                    <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
                        ← Volver al inicio
                    </Link>
                </div>
            </div>
        </div>
    )
}