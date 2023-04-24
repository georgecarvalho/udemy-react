import './App.css';
import {useState} from 'react'
import MyComponent from './components/MyComponent';
import Title from './components/Title';
import CarDetails from './components/CarDetails';

function App() {

  const n = 15
  const [name] = useState("George")
  const redTitle = true

  const cars = [
    {id: 1, brand: "Ford", color: 'vermelho', km: 10000},
    {id: 2, brand: "Renault", color: 'cinza', km: 5000},
    {id: 3, brand: "Fiat", color: 'preto', km: 20000},
  ]

  return (
    <div className="App">
      <h1>React com CSS</h1>
      <MyComponent/>
      <p>Este parágrafo é do App.js</p>
      {/*CSS inline estatico*/}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>Este parágrafo foi estilizado inline</p>
      {/*CSS inline dinamico*/}
      <h2 style={n < 10 ? {color: "purple"} : {color: "pink"}}>CSS dinamico</h2>
      <h2 style={n > 10 ? {color: "purple"} : {color: "pink"}}>CSS dinamico</h2>
      <h2 style={name === "George" ? {color: "green", backgroundColor: "black"} : {color: "gray"}}>CSS dinamico</h2>
      <h2 style={name === "Sanders" ? {color: "green", backgroundColor: "black"} : {color: "gray"}}>CSS dinamico</h2>
      {/*CSS inline dinamico*/}
      <h2 className={redTitle ? "red-title" : "title"}>Título com classe dinamica</h2>
      {/*CSS modules*/}
      <Title />
      {/*Desafio 5*/}
      <h1>Detalhes dos carros</h1>
      {cars.map((car) => (
        <CarDetails 
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}
    </div>
  );
}

export default App;
