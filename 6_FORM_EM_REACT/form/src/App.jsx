import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm
        user={{
          name: "João",
          email: "joao.pedro7111@hotmail.com",
          bio: "Sou um dev",
          role: "Estudante",
        }}
      />
    </div>
  );
}

export default App;
