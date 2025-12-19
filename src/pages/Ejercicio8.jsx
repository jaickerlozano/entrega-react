/**8. Contador de Palabras y Caracteres
Objetivo del ejercicio: Practicar eventos en tiempo real y manipulación avanzada del DOM.
Ejercicio:
Crea una página con un campo de texto donde el usuario pueda escribir un párrafo.
• Muestra en tiempo real el número de caracteres y palabras ingresados debajo del campo.
• Palabras deben ser separadas por espacios, y los caracteres no deben incluir espacios ni saltos de
línea.*/

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Ejercicio8() {
    // 1. Un solo estado: La fuente de la verdad
    const [text, setText] = useState('');

    // 2. ESTADO DERIVADO (Calculado automáticamente)
    // RegExp para buscar cualquier espacio en blanco (espacio, tab, salto de línea)
    const regExp = /\s+/g;

    // Cálculo de caracteres (quitando espacios y saltos de línea)
    const amountChars = text.replace(regExp, '').length;

    // Cálculo de palabras
    // Si el texto está vacío, split devuelve un array con un string vacío [""] (longitud 1).
    // Por eso validamos primero si hay texto con trim().
    const amountWords = text.trim() === '' 
        ? 0 
        : text.replace(/[^a-zA-Z0-9\s]/g ,'').trim().split(/\s+/).length;


    // 3. HandleChange
    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
            <div className="flex flex-col items-center gap-6 bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-gray-800">Ejercicio 8</h2>
                <p className="text-gray-500">Contador de Palabras y Caracteres</p>
                
                <div className="flex flex-col gap-2 w-full">
                    <textarea
                        value={text}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 h-32 resize-none" // Agregué h-32 y resize-none para que se vea mejor
                        placeholder="Ingrese un texto..."
                        name="texto" 
                        id="texto"
                    ></textarea>
                </div>
                
                <div className="w-full flex justify-between bg-gray-100 p-4 rounded-lg">
                    <div className="text-center">
                        <p className="text-gray-600 text-sm">Caracteres</p>
                        <p className="text-2xl font-bold text-blue-600">{amountChars}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-600 text-sm">Palabras</p>
                        <p className="text-2xl font-bold text-green-600">{amountWords}</p>
                    </div>
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