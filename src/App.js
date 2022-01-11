import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar titulo="Geo Music Store"></NavBar>
      <ItemListContainer greeting="¡Coders trabajando! - Sitio en construcción" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
      <Footer mensaje="Soy el footer"></Footer>
    </div>
  );
}

export default App;
