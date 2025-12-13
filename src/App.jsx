// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import Landing from './pages/Landing'; // Tu índice
import Ejercicio1 from './pages/Ejercicio1'; // Tu primer ejercicio
// ... importas los demás

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Barra de navegación común (opcional) */}
      <nav className="p-4 bg-blue-600 text-white shadow-md">
        <Link to="/" className="font-bold text-xl">Mis Ejercicios React</Link>
      </nav>

      {/* Aquí es donde React cambia el contenido "mágicamente" */}
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/ejercicio1" element={<Ejercicio1 />} />
          
        </Routes>
      </div>
    </div>
  );
}

export default App;