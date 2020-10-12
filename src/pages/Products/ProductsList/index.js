import React from 'react';
import { Container, CardStyle } from './styles';



const ProductsList = ({ products }) => {
  console.log(products, 'prods');
  return (
    <Container>
      { products && products.map(product =>
          <CardStyle url={product.images[0].url} title={product.title} price={product.productVariants[0].price} />
        )
      }
    </Container>
  )
};

export default ProductsList;
