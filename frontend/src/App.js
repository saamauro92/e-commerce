import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import {BrowserRouter, Route} from 'react-router-dom';
import CartScreen from './screens/CartScreen';


function App() {
  return (
    <BrowserRouter> 
    <div className="grid-container">

      <header className="row">
        <div>
          <a className="brand" >__</a>

        </div>
        <div>
          <a> Cart</a>
          <a> Sign In</a>
        </div>
      </header>

      <main>
        <Route path="/" component={HomeScreen} exact></Route>
        <Route path="/product/:id" component={ProductScreen} ></Route>
        <Route path="/cart/:id?" component={CartScreen} ></Route>
      </main>

      <footer className="row center">All Right reserved</footer>





    </div>
    </BrowserRouter>
  );
}

export default App;
