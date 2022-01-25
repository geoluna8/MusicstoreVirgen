import './App.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom'; 
import Home from './components/Home';
import NoPage from './components/NoPage';
import Layout from './components/Layout';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home />} />
          <Route path="/category/:id" element={ <ItemListContainer />} />
          <Route path="/item/:id" element={ <ItemDetailContainer />} />
          <Route path="*" element={ <NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
