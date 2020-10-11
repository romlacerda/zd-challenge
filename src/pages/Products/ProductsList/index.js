import React from 'react';
import { Container, CardStyle } from './styles';

const ProductsList = () => {
  return (
    <Container>
      <CardStyle title="Produto" price="4.90" />
      <CardStyle title="Produto" price="5.30" />
      <CardStyle title="Produto" price="6.70" />
      <CardStyle title="Produto" price="1.90" />
      <CardStyle title="Produto" price="2.34" />
    </Container>
  )
};

export default ProductsList;
