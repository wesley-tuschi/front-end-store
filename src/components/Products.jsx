import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from './ProductCard';

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [],
      totalItens: '',
    };
  }

  handleClick = async () => {
    const { productSearch } = this.props;
    const productObjs = await getProductsFromCategoryAndQuery('', productSearch);
    console.log(productObjs);
    this.setState({
      productList: productObjs.results,
      totalItens: productObjs.paging.total,
    });
  };

  render() {
    const { productList, totalItens } = this.state;

    return (
      <div>
        <button data-testid="query-button" onClick={ this.handleClick }>Pesquisar</button>
        <ul>
          {productList.map((product) => (
            <ProductCard
              key={ product.id }
              name={ product.title }
              image={ product.thumbnail }
              price={ product.price }
            />
          ))}
        </ul>
        {totalItens === 0 ? <div>Nenhum produto foi encontrado</div> : null }
      </div>
    );
  }
}

Products.propTypes = {
  productSearch: PropTypes.string.isRequired,
};

export default Products;
