/**3. Lista Dinámica
Objetivo del ejercicio: Trabajar con la creación, eliminación y manipulación de elementos del DOM.
Ejercicio:
Crea una página con un campo de texto, un botón que diga "Agregar", y una lista vacía debajo.
● Cuando el usuario escriba un texto y haga clic en "Agregar", el texto debe añadirse como un
nuevo elemento de la lista.
● Añade un botón al lado de cada elemento para eliminarlo de la lista.
 */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Ejercicio3() {
    // 1. Estado para el input (lo que escribes)
    const [item, setItem] = useState('');
    
    // 2. CORRECCIÓN: Estado para la lista (para que no se borre al renderizar)
    // Inicializamos con un array vacío []
    const [listItems, setListItems] = useState(() => {
        const savedList = localStorage.getItem('mi_primer_lista');
        if (savedList) {
            return JSON.parse(savedList);
        } else {
            return [];
        }
    });

    // Efecto para guardar
    useEffect(() => {
        localStorage.setItem('mi_primer_lista', JSON.stringify(listItems));
    }, [listItems]);

    const handleChange = (e) => {
        setItem(e.target.value);
    }

    const handleClickAgregar = () => {
        // Evitamos agregar tareas vacías
        if (item.trim() === "") return;

        // 3. CÓMO AGREGAR A UN ARRAY EN REACT:
        // No usamos .push(). Usamos el spread operator (...)
        // Creamos un array nuevo con todo lo que había antes (...listItems) + el nuevo item
        setListItems([...listItems, item]);
        
        // Limpiamos el input después de agregar
        setItem(''); 
    }

    const handleClickEliminar = (indexToDelete) => {
        // Usamos filter para crear un NUEVO array
        // El primer parámetro (_) es el elemento en sí (no lo necesitamos)
        // El segundo parámetro (index) es la posición actual
        const nuevaLista = listItems.filter((_, index) => index !== indexToDelete);
        
        // Actualizamos el estado con la lista nueva
        setListItems(nuevaLista);
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
            <div className="flex flex-col items-center gap-4 bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-gray-800">Ejercicio 3</h2>
                <label htmlFor="task" className="flex flex-col text-gray-600 font-bold text-md w-full">
                    Inserta una tarea
                    <input 
                        value={item}
                        onChange={handleChange}
                        onKeyDown={(e) => e.key === 'Enter' && handleClickAgregar()}
                        type="text" 
                        id="task" 
                        className="w-full mt-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-slate-300 shadow-sm focus:shadow" 
                        placeholder="Escribe aquí..."/>
                </label>

                <button
                    onClick={handleClickAgregar}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform active:scale-95 transition-all"
                >
                    Agregar
                </button>
                
                {/* 4. Renderizado de la lista */}
                <ul className="w-full flex flex-col gap-2">
                    {listItems.map((tarea, index) => (
                        <li key={index} className="flex justify-between items-center p-3 bg-gray-100 rounded border border-gray-200 text-gray-700">
                            
                            <span className="font-medium break-all">{tarea}</span> 

                            {/* Pasamos el index a la función mediante una arrow function */}
                            <button 
                                onClick={() => handleClickEliminar(index)}
                                className="ml-3 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded shadow transition-colors text-sm"
                            >
                                Eliminar
                            </button>
                        </li>
                    ))}
                    
                    {/* Un mensajito opcional si la lista está vacía */}
                    {listItems.length === 0 && (
                        <p className="text-center text-gray-400 text-sm italic">No hay tareas pendientes</p>
                    )}
                </ul>

                <div className="pt-4 border-t border-gray-200 w-full text-center">
                    <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
                        ← Volver al inicio
                    </Link>
                </div>
            </div>
        </div>
    )
}