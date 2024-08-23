
import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  const validacao = 10
  const n = 0;
  const redTitle = true;
  return (
    <div className="App">
      <h1>React com CSS</h1>
      <MyComponent />
      <p style={{color: "white", padding: "50px", backgroundColor: "darkred"}}>Elemento estilizado com inline</p>
      <p style={n > validacao ? ({padding: "15px"}) : ({padding: "5px"})  }>Este é um CSS utilizando informações dinâmicas</p>
      <p style={n < validacao ? ({padding: "15px"}) : ({padding: "5px"})  }>Este é um CSS utilizando informações dinâmicas</p>
      {/* classe dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título terá classe dinâmica</h2>
    </div>
  );
}

export default App;
