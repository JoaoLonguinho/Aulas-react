import './App.css';
import UserDetails from './components/UserDetails';

function App() {
  const pessoasHabilitadas = [
    {id: 0, nome: 'João', cidade: "sp", temHabilitacao: true},
    {id: 1, nome: 'Rael', cidade: "sp", temHabilitacao: false},
    {id: 2, nome: 'Carlos', cidade: "sp", temHabilitacao: true},
    {id: 3, nome: 'Bianca', cidade: "sp", temHabilitacao: true}
  ]
  return (
    <div className="App">
      {pessoasHabilitadas.map((pessoa) => (
        <UserDetails key={pessoa.id} nome={pessoa.nome} cidade={pessoa.cidade} temHabilitacao={pessoa.temHabilitacao} />
      ))}
    </div>
  );
}

export default App;
