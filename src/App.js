import './App.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom'; 
import Home from './components/Home';
import NoPage from './components/NoPage';
import Layout from './components/Layout';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { CartProvider } from './context/CartContext';

const App = () => {

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route index element={ <Home />} />
            <Route path="/category/:name/:id" element={ <ItemListContainer />} />
            <Route path="/item/:id" element={ <ItemDetailContainer />} />
            <Route path="/cart" element={ <Cart />} />
            <Route path="/cart/checkout" element={ <Checkout />} />
            <Route path="*" element={ <NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
