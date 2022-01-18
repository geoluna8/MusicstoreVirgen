import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

function App() {
  const [name, setName] = useState("Eren");
  const [itemsQty, setItemsQty] = useState(0);

  useEffect(() => {
    console.log("Cambie el item de cantidad","ahora tengo", itemsQty);
    console.log("Cambio en la fecha", new Date());
    return () => {
      console.log("se desmonto el componente")
    }
  },[itemsQty]);
  //console.log("si sigo poniendo mensajes aca, estoy haciendo mal");

  return (
    <div className="App">
      <NavBar titulo="Geo Music Store"></NavBar>
      <ItemListContainer greeting="¡Coders trabajando! - Sitio en construcción" />
      {/*<Button onClick={ () => setName("Mika")} variant="primary">Cambiar nombre</Button>
      <Button onClick={ () => setItemsQty(itemsQty + 1)} variant="success">Agregar</Button>
      <Button onClick={ () => setItemsQty(itemsQty - 1)} variant="danger">Quitar</Button>*/}
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{name}</h1>
        <h1>{itemsQty}</h1>
        <p>
          Mi primera tienda
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          CoderHouse - Geovanny Virgen Luna
        </a>
    </header>*/}
      <Footer mensaje="Soy el footer"></Footer>
    </div>
  );
}

export default App;
