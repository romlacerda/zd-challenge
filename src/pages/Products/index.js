import React from 'react';
import { Container } from './styles';
import ProductsList from './ProductsList';

const Products = ({ children }) => (
  <Container>
    <ProductsList />
  </Container>
);

export default Products;
