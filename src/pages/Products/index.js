import React, { useContext } from 'react';
import { Container } from './styles';
import ProductsList from './ProductsList';
import { AppContext } from '../../App';

const Products = (props) => {
  const { state } = useContext(AppContext);

  return (
    <Container>
      <ProductsList />
    </Container>
  )
};

export default Products;
