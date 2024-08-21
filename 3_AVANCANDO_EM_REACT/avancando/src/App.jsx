import { useState, useEffect } from 'react';
import './App.css';
import quadra from './assets/quadra.jpg'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';

function App() {
  const name = "Carlos"
  const [userName] = useState("Bianca");
  const cars = [
    {id: 1, brand: "Ferrari", color: "yellow", newCar: true, km: 0},
    {id: 2, brand: "honda", color: "silver", newCar: false, km: 13000},
    {id: 3, brand: "Civic", color: "brown", newCar: false, km: 2310}
  ]

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
      {/* Props */}
      <ShowUserName name={name}/>
      <ShowUserName name="João"/>
      <ShowUserName name={userName}/>
      {/* Destructuring */}
      <CarDetails brand='Chevrolet' km={100000} color="red" newCar={true} />
      {/* Reaproveitando componentes  */}
      <CarDetails brand="BMW" km={0} color="grey" newCar={false} />
      {/* Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails brand={car.brand} color={car.color} km={car.km} newCar={car.newCar}/>
      ))} 
      {/* Fragments */}
      <Fragments propFragment="teste" />
      {/* Children prop */}
      <Container myValue='testing'>
        <p>Este é meu conteúdo</p>
      </Container>
      <Container myValue={'testing-2'}>
        <h3>teste</h3>
      </Container>
    </div>
  );
}

export default App;
