import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class Products extends React.Component {
  render() {
    const { productList, totalItens, searchForInput } = this.props;

    return (
      <div>
        <button
          data-testid="query-button"
          name=""
          onClick={ () => searchForInput() }
        >
          Pesquisar
        </button>
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
  totalItens: PropTypes.number.isRequired,
  searchForInput: PropTypes.func.isRequired,
  productList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
  })).isRequired,
};

export default Products;
