import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <Router>
      {/* Barre de navigation simple */}
      <nav className="p-4 bg-gray-800 text-white flex gap-4">
        <Link to="/" className="hover:text-[#f0622e]">Accueil</Link>
      </nav>

      {/* Définition des chemins */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;