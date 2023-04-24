import { useState } from 'react';
import './App.css';

import City from "./assets/city.jpg"
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {

  const [username] = useState("George")

  const cars = [
    {id: 1, brand: "Ferrari", color: "Vermelho", km: 0, newCar: true},
    {id: 2, brand: "Kia", color: "Preto", km: 10000, newCar: false},
    {id: 3, brand: "Renault", color: "Amarelo", km: 5500, newCar: false},
  ]

  const showMessage = () =>{
    console.log("Evento do componente pai")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const pessoas = [
    {id:1, nome: "laura", idade: 21, profissao: "tec enfermagem"},
    {id:2, nome: "ana", idade: 14, profissao: "estudante"},
    {id:3, nome: "pedro", idade: 18, profissao: "desenvolvedor"},
    {id:4, nome: "carlos", idade: 17, profissao: "professor"},
  ]

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/*Imagem em public*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>

      {/*Imagem em assets*/}
      <div>
        <img src={City} alt="Cidade" />
      </div>

      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/*Props*/}
      <ShowUserName name={username} />
      {/*Destructuring*/}
      <CarDetails brand="VW" km={100000} color="preto" newCar={false} />
      {/*Reaproveitando*/}
      <CarDetails brand="Ford" km={0} color="Azul" newCar={true} />
      <CarDetails brand="Fiat" km={4500} color="Vermelho" newCar={false} />
      {/*Loop*/}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
          newCar={car.newCar}
        />
      ))}
      {/*Fragments*/}
      <Fragments/>
      {/*Children*/}
      <Container myValue="teste">
        <p>E este é o conteúdo</p>
      </Container>
      {/*Função como prop*/}
      <ExecuteFunction myFunction={showMessage}/>
      {/*State lift*/}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      {/*Desafio 4*/}
      {pessoas.map((pessoa) => (
        <UserDetails 
          key={pessoa.id}
          nome={pessoa.nome}
          idade={pessoa.idade}
          profissao={pessoa.profissao}
        />
      ))}
    </div>
  );
}

export default App;