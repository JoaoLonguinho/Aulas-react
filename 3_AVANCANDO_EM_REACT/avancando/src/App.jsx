import './App.css';
import quadra from './assets/quadra.jpg'
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
      <h3>Seção 3</h3>
      {/* Imagem em public */}
      <div>
        <img src="/memoria-dois.jpg" alt="Cartão de memória" width={400}/>
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={quadra} alt="Quadra" width={400}/>
      </div>
      <ManageData/>
      <ListRender/>
    </div>
  );
}

export default App;
