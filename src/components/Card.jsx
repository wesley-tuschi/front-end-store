import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { quantity, name, image, price, onIncrease, onDecrease, onRemove } = this.props;

    return (
      <li>
        <h4 data-testid="shopping-cart-product-name">{name}</h4>
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
        <p>{price}</p>
        <img src={ image } alt={ name } />
        <button data-testid="product-increase-quantity" onClick={ onIncrease }>+</button>
        <button data-testid="product-decrease-quantity" onClick={ onDecrease }>-</button>
        <button data-testid="remove-product" onClick={ onRemove }>X</button>
      </li>
    );
  }
}

Card.propTypes = {
  quantity: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Card;
