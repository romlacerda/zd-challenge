import React from 'react';
import PropTypes from 'prop-types';

import { Container, CardStyle } from './styles';

const ProductsList = ({ products }) => {
  return (
    <Container>
      { products && products.map(product =>
          <CardStyle url={product.images[0].url} title={product.title} price={product.productVariants[0].price} />
        )
      }
    </Container>
  )
};

ProductsList.propTypes = {
  products: PropTypes.shape([]).isRequired,
};

export default ProductsList;
