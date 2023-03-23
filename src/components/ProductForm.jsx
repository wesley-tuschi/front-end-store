import { Component } from 'react';
import PropTypes from 'prop-types';
import { saveComentsLocalStorage } from '../services/helpers';
import ProductEvaluation from './ProductEvaluation';

class ProductForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      rating: '',
      evaluation: '',
      showMessage: false,
      arrayEvaluation: [],
    };
  }

  componentDidMount() {
    this.setarrayEvaluation();
  }

  setarrayEvaluation() {
    const { id } = this.props;
    this.setState({
      arrayEvaluation: JSON.parse(localStorage.getItem(id)),
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handelOnSubmint = (event) => {
    const { email, rating, evaluation } = this.state;
    const { id } = this.props;

    event.preventDefault();
    if (rating === '') {
      this.setState({
        showMessage: true,
      });
    } else {
      saveComentsLocalStorage(id, email, rating, evaluation);
      this.setState({
        email: '',
        rating: '',
        evaluation: '',
        showMessage: false,
      });
    }
    this.setarrayEvaluation();
  };

  render() {
    const { email, evaluation, showMessage, arrayEvaluation } = this.state;
    return (
      <>
        <form onSubmit={ this.handelOnSubmint }>
          <label>
            Informe seu email:
            <input
              type="email"
              name="email"
              value={ email }
              data-testid="product-detail-email"
              onChange={ this.handleChange }
            />
          </label>
          <p>
            Nota:
            <label>
              <input
                type="radio"
                name="rating"
                value={ 1 }
                data-testid="1-rating"
                onChange={ this.handleChange }
              />
              1
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value="2"
                data-testid="2-rating"
                onChange={ this.handleChange }
              />
              2
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value="3"
                data-testid="3-rating"
                onChange={ this.handleChange }
              />
              3
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value="4"
                data-testid="4-rating"
                onChange={ this.handleChange }
              />
              4
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value="5"
                data-testid="5-rating"
                onChange={ this.handleChange }
              />
              5
            </label>
          </p>
          <textarea
            name="evaluation"
            cols="30"
            rows="10"
            data-testid="product-detail-evaluation"
            value={ evaluation }
            onChange={ this.handleChange }
            required
          />
          <button data-testid="submit-review-btn">Enviar</button>
          { showMessage ? <p data-testid="error-msg">Campos inválidos</p> : null}
        </form>
        {arrayEvaluation
          ? (arrayEvaluation.map((product) => (
            <ProductEvaluation
              key={ product.email }
              email={ product.email }
              rating={ product.rating }
              evaluation={ product.evaluation }
            />
          ))) : <ProductEvaluation show />}
      </>
    );
  }
}

ProductForm.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ProductForm;
