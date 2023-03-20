import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import shoppingCart from './img/shoppingCart.png';
import Cart from './pages/cart/Cart';
import ProductDetails from './pages/ProductDetails';
import ProductList from './pages/ProductList';

class App extends React.Component {
  render() {
    return (
      <main>
        <Link data-testid="shopping-cart-button" to="/cart">
          <img height="20" src={ shoppingCart } alt="Shopping Cart" />
        </Link>
        <Switch>
          <Route path="/" exact component={ ProductList } />
          <Route path="/cart" component={ Cart } />
          <Route path="/product/:id" component={ ProductDetails } />
        </Switch>
      </main>
    );
  }
}

export default App;
