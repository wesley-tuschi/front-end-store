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
    });
  };

  addProductToCart = () => {
    const { match: { params: { id } } } = this.props;
    const { name, image, price } = this.state;
    saveLocalStorage(id, name, price, image);
  };

  render() {
    const { name, price, image } = this.state;
    return (
      <div>
        <p data-testid="product-detail-name">{name}</p>
        <p data-testid="product-detail-price">{price}</p>
        <img data-testid="product-detail-image" src={ image } alt={ name } />
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
