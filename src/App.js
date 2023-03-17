import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={ ProductList } />
      </Switch>
    );
  }
}

export default App;
