import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ImagesTextSection from './components/ImagesTextSection';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage'; // Asegúrate de importar la página de contacto

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<><HeroSection /><ImagesTextSection /></>} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Añade más rutas según sea necesario */}
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
