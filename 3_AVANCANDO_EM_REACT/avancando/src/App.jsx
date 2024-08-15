import { useState } from 'react';
import './App.css';
import quadra from './assets/quadra.jpg'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

function App() {
  const name = "Carlos"
  const [userName] = useState("Bianca");

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
      <ConditionalRender/>
      <ShowUserName name={name}/>
      <ShowUserName name="João"/>
      <ShowUserName name={userName}/>
    </div>
  );
}

export default App;
