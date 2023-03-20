import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
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
