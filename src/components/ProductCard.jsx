import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { saveLocalStorage } from '../services/helpers';

class ProductCard extends React.Component {
  addProductToCart = () => {
    const { id, name, price, image } = this.props;
    saveLocalStorage(id, name, price, image);
  };

  render() {
    const { name, image, price, id } = this.props;
    return (
      <div data-testid="product">
        <Link
          data-testid="product-detail-link"
          to={ `/product/${id}` }
          id={ id }
          name={ name }
          price={ price }
          image={ image }
        >
          <p>{name}</p>
          <p>{price}</p>
          <img src={ image } alt={ name } />
        </Link>
        <button
          data-testid="product-add-to-cart"
          onClick={ this.addProductToCart }
        >
          Adicionar ao carrinho de compras
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ProductCard;
