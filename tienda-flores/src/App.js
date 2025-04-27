import { Routes, Route } from 'react-router-dom';
import MainHeader from './components/MainHeader/MainHeader';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    
      <MainHeader />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='*' element={<h1>404 - Página no encontrada</h1>} />
      </Routes>
    </>
  );
}

export default App;
