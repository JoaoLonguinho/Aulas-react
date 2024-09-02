import './App.css';
import CarDetails from './components/CarDetails';

function App() {
  const cars = [
    {id: 1, model: 'fiat', year: '2000', color: 'black'},
    {id: 2, model: 'Chevrolet', year: '2003',  color: 'red'},
    {id: 3, model: 'Nissan', year: 2022, color: 'blue'}
  ]
  return (
    <div className="App">
      <h1>Carros e seus modelos</h1>
      {cars.map((car) => (
        <CarDetails key={car.id} model={car.model} year={car.year} color={car.color} />
      ))}
    </div>
  );
}

export default App;
