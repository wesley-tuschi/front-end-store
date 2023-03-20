import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class CategoriesList extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    getCategories().then((data) => this.setState({ categories: data }));
  }

  render() {
    const { categories } = this.state;
    const { selectCategory } = this.props;
    return (
      <>
        <p>Categorias</p>
        {
          categories.map((category) => (
            <button
              key={ category.id }
              data-testid="category"
              type="button"
              onClick={ (target) => selectCategory(target) }
              name={ category.id }
              value={ category.name }
            >
              { category.name }
            </button>
          ))
        }
      </>
    );
  }
}

CategoriesList.propTypes = {
  selectCategory: PropTypes.func,
};

CategoriesList.defaultProps = {
  selectCategory: () => '',
};

export default CategoriesList;
