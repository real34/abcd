import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './Catalog/ProductList';
import products from './db/products'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React for Magento</h2>
        </div>
        <p className="App-intro">
          This is the future of Magento
        </p>

        <ProductList title="Sales" products={[]} />
        <ProductList title="New arrivals" products={products} />
      </div>
    );
  }
}

export default App;
