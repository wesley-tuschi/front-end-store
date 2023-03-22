import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductEvaluation extends Component {
  render() {
    const { email, rating, evaluation, show } = this.props;
    if (show) {
      return <p>Nenhuma avaliação</p>;
    }
    return (
      <div>
        <p data-testid="review-card-email">{ email }</p>
        <p data-testid="review-card-rating">{ rating }</p>
        <p data-testid="review-card-evaluation">{ evaluation }</p>
      </div>
    );
  }
}

ProductEvaluation.propTypes = {
  email: PropTypes.string,
  rating: PropTypes.string,
  evaluation: PropTypes.string,
  show: PropTypes.bool,
};

ProductEvaluation.defaultProps = {
  email: '',
  rating: '',
  evaluation: '',
  show: false,
};

export default ProductEvaluation;
