import React, { Component } from 'react';

class ProductList extends Component {
  state = {
    product: '',
    showMessage: true,
  };

  handleInputChange = ({ target }) => {
    const product = target.value;
    const showMessage = product.length === 0;
    this.setState({ product, showMessage });
  };

  render() {
    const { product, showMessage } = this.state;
    const message = 'Digite algum termo de pesquisa ou escolha uma categoria.';
    return (
      <form>
        <label>
          <input
            name="product"
            type="text"
            placeholder="Pesquise por um produto"
            value={ product }
            onChange={ this.handleInputChange }
          />
        </label>
        { showMessage && <div data-testid="home-initial-message">{ message }</div> }
      </form>
    );
  }
}

export default ProductList;
