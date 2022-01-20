import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { getProductsFromCategory } from './services/Products';
import ItemDetailContainer from './components/ItemDetailContainer';
import Loading from './components/Loading';

function App() {
  const [name, setName] = useState("Eren");
  const [itemsQty, setItemsQty] = useState(0);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log("Cambie el item de cantidad","ahora tengo", itemsQty);
    console.log("Cambio en la fecha", new Date());
    return () => {
      console.log("se desmonto el componente")
    }
  },[itemsQty]);
  //console.log("si sigo poniendo mensajes aca, estoy haciendo mal");

  useEffect(() => {
    let mounted = true
    setLoading(true)
    getProductsFromCategory("MLA", "MLA1055").then(items => {
      if(mounted) {
        console.log(items.results)
        setTimeout(() => {
          setLoading(false)
        }, 2000)
      }
    })
    return () => mounted = false;
  }, []);

  return (
    <div className="App">
      <NavBar titulo="Geo Music Store"></NavBar>
      <ItemDetailContainer />
      {loading ? <Loading /> : null} 
      {/*<ItemListContainer greeting="¡Coders trabajando! - Sitio en construcción" />
      <Button onClick={ () => setName("Mika")} variant="primary">Cambiar nombre</Button>
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
