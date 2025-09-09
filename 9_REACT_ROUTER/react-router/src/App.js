import './App.css';

// 1- Configuração de routes 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 2- importanto páginas
import Home from "./pages/Home";
import About from "./pages/About";

// 3-Componentes
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar /> {/* É obrigatório colocar dentro do BrowserRouter */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
