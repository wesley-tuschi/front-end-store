import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';

class Card extends React.Component {
  constructor() {
    super()
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
    const { id }  = this.props;
    const productObj = await getProductById(id);
    this.setState({
      name: productObj.title,
      price: productObj.price,
      image: productObj.thumbnail,
    });
  };

  render() {
    
    const { id } = this.props;
    const { name, price, image } = this.state

    return (
      <div data-testid="product">
        hello world
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

Card.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Card;
