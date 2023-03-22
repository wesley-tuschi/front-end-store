import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';
import { saveLocalStorage } from '../services/helpers';
import ProductForm from '../components/ProductForm';

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      objProps: {
        id: '',
        name: '',
        price: '',
        image: '',
        freeShipping: false,
        maxQuantity: 1,
      },
    };
  }

  componentDidMount() {
    this.fetchProductId();
  }

  fetchProductId = async () => {
    const { match: { params: { id } } } = this.props;
    const productObj = await getProductById(id);
    this.setState({
      objProps: {
        id,
        name: productObj.title,
        price: productObj.price,
        image: productObj.thumbnail,
        freeShipping: productObj.shipping.free_shipping,
        maxQuantity: productObj.available_quantity,
      },
    });
  };

  addProductToCart = () => {
    const { objProps } = this.state;
    saveLocalStorage(objProps);
  };

  render() {
    const { objProps: { name, price, image, freeShipping } } = this.state;
    const { match: { params: { id } } } = this.props;
    return (
      <>
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
        <ProductForm
          id={ id }
        />
      </>
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
