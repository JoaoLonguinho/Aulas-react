
import './App.css';
import InitialForm from './components/InitialForm';

function App() {
  return (
    <div className="App">
      <InitialForm formName='userName' formNamePh='Nome de usuário' formNumber='age' formNumberPh='Idade'/>
    </div>
  );
}

export default App;
