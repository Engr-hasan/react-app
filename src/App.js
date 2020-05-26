import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import ProductList from './ProductList/ProductList';
import Cart from './Cart/Cart';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
