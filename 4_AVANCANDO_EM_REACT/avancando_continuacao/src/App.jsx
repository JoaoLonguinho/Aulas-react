import './App.css';
import ExecuteFunction from './components/ExecuteFunction';
import { useState } from 'react';
import ChangeMessage from './components/ChangeMessage';
import ChangeMessageState from './components/ChangeMessageState';

function App() {
  function ShowMessage(){
    console.log('Evento do componente pai!')
  }
  const [message, setMessage] = useState("")
  const handleMessage = (msg) => {
    setMessage(msg)
  }
  return (
    <div className="App">
      <ExecuteFunction myFunction={ShowMessage}/>
      <ChangeMessage msg={message}/>
      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  );
}

export default App;
