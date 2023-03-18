import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { name, image, price } = this.props;

    return (
      <div data-testid="product">
        <p>{name}</p>
        <p>{price}</p>
        <img src={ image } alt={ name } />
      </div>
    );
  }
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProductCard;
