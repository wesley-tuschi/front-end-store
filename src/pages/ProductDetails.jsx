import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';
import { saveLocalStorage } from '../services/helpers';

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      price: '',
      image: '',
      freeShipping: false,
    };
  }

  componentDidMount() {
    this.fetchProductId();
  }

  fetchProductId = async () => {
    const { match: { params: { id } } } = this.props;
    const productObj = await getProductById(id);
    this.setState({
      name: productObj.title,
      price: productObj.price,
      image: productObj.thumbnail,
      freeShipping: productObj.shipping.free_shipping,
    });
  };

  addProductToCart = () => {
    const { match: { params: { id } } } = this.props;
    const { name, image, price, freeShipping } = this.state;
    saveLocalStorage(id, name, price, image, freeShipping);
  };

  render() {
    const { name, price, image, freeShipping } = this.state;
    return (
      <div>
        <p data-testid="product-detail-name">{name}</p>
        <p data-testid="product-detail-price">{price}</p>
        <img data-testid="product-detail-image" src={ image } alt={ name } />
        { freeShipping ? <p data-testid="free-shipping">Frete Grátis </p> : null }
        <button
          data-testid="product-detail-add-to-cart"
          onClick={ this.addProductToCart }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
