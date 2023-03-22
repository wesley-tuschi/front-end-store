import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Products from '../components/Products';
import CategoriesList from '../components/CategoriesList';

class ProductList extends Component {
  state = {
    inputValue: '',
    showMessage: true,
    category: '',
    productList: [],
    totalItens: 1,
  };

  searchForCategory = ({ target }) => { // Função usada para elevar o state de CategoriesList
    this.setState({ category: target.name,
    }, async () => {
      this.searchForInput();
    });
  };

  searchForInput = async () => {
    const { category, inputValue } = this.state;
    const productObjs = await getProductsFromCategoryAndQuery(category, inputValue);
    // console.log(productObjs);
    this.setState({
      productList: productObjs.results,
      totalItens: productObjs.paging.total,
    });
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
    const { showMessage, productList, totalItens } = this.state;
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
        <CategoriesList selectCategory={ this.searchForCategory } />
        <Products
          searchForInput={ this.searchForInput }
          productList={ productList }
          totalItens={ totalItens }
        />
      </div>
    );
  }
}

export default ProductList;
