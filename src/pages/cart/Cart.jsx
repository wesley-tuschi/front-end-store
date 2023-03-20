import React, { Component } from 'react';
import Card from '../../components/Card';



class Cart extends Component {
  constructor() {
    super()
    this.state = {
      array: [],
    };
  }

  componentDidMount(){
    this.setState({
      array: JSON.parse(localStorage.getItem('product'))
    })
  }
  
  render() {
      const { array } = this.state
    if (!array) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    }
    return (
      <>

        <ul>
          {array.map((id) => (
            <Card id={id}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default Cart;
