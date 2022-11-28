import './App.css';
import Products from './pages/products'
import Basket from './pages/basket';
import Product from './pages/product'
import Auth from './pages/auth';
import Reg from './pages/reg';

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/reg' element={<Reg />} />
        <Route path='/basket' element={<Basket />}/>
        <Route path='/product/:id' element={<Product />} />
        <Route path='/basket/product/:id' element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;