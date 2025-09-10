import './App.css';

// 1- Configuração de routes 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 2- importanto páginas
import Home from "./pages/Home";
import About from "./pages/About";

// 3-Componentes
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Info from './pages/Info';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2- Links com react router */}
        <Navbar /> {/* É obrigatório colocar dentro do BrowserRouter */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* 4- Rota dinâmica */}
          <Route path="/products/:id" element={<Products />} />
          {/* 6- Nested Routes */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* 7- no match route */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
