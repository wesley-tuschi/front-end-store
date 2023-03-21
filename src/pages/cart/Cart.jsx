import React, { Component } from 'react';
import Card from '../../components/Card';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.setState({
      array: JSON.parse(localStorage.getItem('product')),
    });
  }

  // newArray = async () => {
  //   const { array } = this.state;
  //   if (!array) {
  //     return null;
  //   }
  //   const arr = array.map(async (product) => {
  //     const data = await getProductById(product.id);
  //     return {
  //       ...product,
  //       ...data,
  //     };
  //   });
  //   this.setState({ newArr: await Promise.all(arr) });
  // }; FUNÇÃO DE PROMISSE ALL, MANTER PARA ESTUDO POSTERIOR

  render() {
    const { array } = this.state;
    if (array === null) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }
    return (
      <ul>
        {array
          .map(({ id, quantity, name, image, price }) => (
            <Card
              key={ id }
              name={ name }
              quantity={ quantity }
              image={ image }
              price={ price }
            />
          ))}
      </ul>
    );
  }
}

export default Cart;
