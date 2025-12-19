// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import Landing from './pages/Landing'; // Índice
import Ejercicio1 from './pages/Ejercicio1'; // Primer ejercicio
import Ejercicio2 from './pages/Ejercicio2'; // Segundo ejercicio
import Ejercicio3 from './pages/Ejercicio3'; // Segundo ejercicio
import Ejercicio4 from './pages/Ejercicio4'; // Segundo ejercicio
import Ejercicio5 from './pages/Ejercicio5'; // Segundo ejercicio
import Ejercicio6 from './pages/Ejercicio6'; // Segundo ejercicio
import Ejercicio7 from './pages/Ejercicio7'; // Segundo ejercicio
import Ejercicio8 from './pages/Ejercicio8'; // Segundo ejercicio
import Ejercicio9 from './pages/Ejercicio9'; // Segundo ejercicio
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
          <Route path="/ejercicio2" element={<Ejercicio2 />} />
          <Route path="/ejercicio3" element={<Ejercicio3 />} />
          <Route path="/ejercicio4" element={<Ejercicio4 />} />
          <Route path="/ejercicio5" element={<Ejercicio5 />} />
          <Route path="/ejercicio6" element={<Ejercicio6 />} />
          <Route path="/ejercicio7" element={<Ejercicio7 />} />
          <Route path="/ejercicio8" element={<Ejercicio8 />} />
          <Route path="/ejercicio9" element={<Ejercicio9 />} />
          {/* Aquí irás agregando las rutas de los otros 8 ejercicios */}
        </Routes>
      </div>
    </div>
  );
}

export default App;