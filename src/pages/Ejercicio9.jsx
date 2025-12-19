/**9. Lista de Tareas con LocalStorage
Objetivo del ejercicio: Practicar persistencia de datos con localStorage.
Ejercicio:
Crea una aplicación de lista de tareas.
• Cada tarea debe incluir un texto y un checkbox para marcarla como completada.
• Las tareas se deben guardar en localStorage para que persistan incluso si la página se recarga.
• Debe incluir un botón para limpiar todas las tareas completadas y actualizar el localStorage.*/

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Ejercicio9() {
    // 1.- Estados
    const [task, setTask] = useState('');
    
    // --- CORRECCIÓN LOCALSTORAGE (Carga Inicial) ---
    // Usamos una función dentro del useState (Lazy Initialization).
    // Esto hace que lea el localStorage SOLO la primera vez que carga la página.
    const [list, setList] = useState(() => {
        const savedList = localStorage.getItem('mis_tareas_v1');
        if (savedList) {
            return JSON.parse(savedList);
        } else {
            return [];
        }
    });

    // 2.- EFECTO PARA GUARDAR (Persistencia)
    // Cada vez que 'list' cambie, guardamos automáticamente en LocalStorage
    // Guardar lista
    useEffect(() => {
        localStorage.setItem('mis_tareas_v1', JSON.stringify(list));
    }, [list]);

    function handleChange(e) {
        setTask(e.target.value);
    }

    // 3.- AGREGAR TAREA (Como OBJETO)
    function handleClickAddTask() {
        if(task.trim() === '') return

        // Se crea un nuevo objeto
        const nuevaTarea = {
            text : task,
            completed : false
        }
        // Actualiza la lista
        setList([...list, nuevaTarea]);
        setTask(''); // Se reinicia la entrada
    }

    // 4.- MANEJAR EL CHECKBOX INDIVIDUAL
    // Recibimos el índice para saber CUÁL tarea estamos marcando
    function handleToggleTask(index) {
        const nuevaLista = list.map((t, i) => {
            if (i === index) {
                // Si es la tarea que se toca, se invierte su estado 'completed'
                return {...t, completed: !t.completed};
            }
            // Si no es la que se toca, se deja tal como está
            return t;
        })
        setList(nuevaLista);
    }

    // 5.- ELIMINAR COMPLETADAS
    function handleClickRemoveTask() {
        // Filtramos: "Déjame solo las tareas que NO (!) están completadas"
        const nuevaLista = list.filter((tarea) => !tarea.completed)
        setList(nuevaLista);
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
            <div className="flex flex-col items-center gap-6 bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-gray-800">Ejercicio 9</h2>
                <p className="text-gray-500">Lista de Tareas (LocalStorage)</p>
                
                <div className="flex flex-col gap-2 w-full">
                    <input
                        value={task}
                        onChange={handleChange}
                        // Agregué esto para que puedas dar ENTER y agregar
                        onKeyDown={(e) => e.key === 'Enter' && handleClickAddTask()}
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                        placeholder="Nueva tarea..."
                        name="texto"
                        id="texto"
                    />
                    <button 
                        onClick={handleClickAddTask}   
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform active:scale-95 transition-all">
                            Agregar tarea
                    </button>
                </div>

                <div className="w-full">
                    <ul className="w-full flex flex-col gap-2">
                        {list.map((tarea, index) => (
                            <li key={index} className={`flex items-center gap-3 p-3 rounded border transition-colors ${tarea.completed ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}> 
                                
                                {/* EL CHECKBOX MÁGICO */}
                                <input 
                                    checked={tarea.completed} // Ahora lee DE SU PROPIO objeto
                                    onChange={() => handleToggleTask(index)} 
                                    type="checkbox" 
                                    className="w-5 h-5 min-w-[1.25rem] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                                    id={`item${index}`} 
                                />
                                
                                <label 
                                    htmlFor={`item${index}`} 
                                    className={`w-full cursor-pointer select-none break-all leading-tight ${tarea.completed ? 'line-through text-gray-400' : 'text-gray-700 font-medium'}`}
                                >
                                    {tarea.text}
                                </label>

                            </li>
                        ))}

                        {list.length === 0 && (
                            <p className="text-center text-gray-400 text-sm italic py-4">No hay tareas pendientes</p>
                        )}

                        {/* Botón para borrar completadas (Solo aparece si hay alguna completada) */}
                        {list.some(t => t.completed) && (
                            <button 
                                onClick={handleClickRemoveTask}
                                className="w-full mt-4 bg-red-100 hover:bg-red-200 text-red-600 border border-red-200 font-bold py-2 px-6 rounded-lg transition-all text-sm"
                            >
                                Limpiar tareas completadas 🗑️
                            </button>
                        )}
                    </ul>
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