import React, { Component } from 'react';
import Card from '../../components/Card';



class Cart extends Component {
  constructor() {
    super()
    this.state = {
      array: [],
      teste: [1, 2, 3]
    };
  }

  componentDidMount(){
    this.setState({
      array: JSON.parse(localStorage.getItem('product'))
    })
  }
  
  render() {
      const { array, teste } = this.state
    return (
      <>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <ul>

        {teste.map((t) => {
          <p>hello{t}</p>
        })}
        </ul>
      </>
    );
  }
}

export default Cart;
