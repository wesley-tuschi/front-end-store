import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { quantity, name, image, price } = this.props;

    return (
      <li>
        <h4 data-testid="shopping-cart-product-name">{name}</h4>
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
        <p>{price}</p>
        <img src={ image } alt={ name } />
      </li>
    );
  }
}

Card.propTypes = {
  quantity: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Card;
