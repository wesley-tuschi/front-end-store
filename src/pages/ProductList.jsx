import React, { Component } from 'react';
import Products from '../components/Products';

class ProductList extends Component {
  state = {
    inputValue: '',
    showMessage: true,
  };

  show = () => {
    const { inputValue } = this.state;
    if (inputValue !== '') {
      this.setState({ showMessage: false });
    } else {
      this.setState({ showMessage: true });
    }
  };

  handleInputChange = ({ target }) => {
    const { value } = target;
    this.setState({
      inputValue: value,
    }, () => this.show()); // Aqui a função de atualizar o status 'showMessage' deve ser passada como segundo parâmetro para garantir que a atualização ocorra apenas após a atualização do input
  };

  render() {
    const { showMessage, inputValue } = this.state;
    const message = 'Digite algum termo de pesquisa ou escolha uma categoria.';
    return (
      <div>
        <label>
          <input
            type="text"
            data-testid="query-input"
            placeholder="Pesquise por um produto"
            onChange={ this.handleInputChange }
          />
        </label>
        { showMessage && <div data-testid="home-initial-message">{ message }</div> }
        <Products
          productSearch={ inputValue }
        />
      </div>
    );
  }
}

export default ProductList;
