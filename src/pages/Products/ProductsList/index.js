import React from 'react';
import { Container, CardStyle } from './styles';

import { graphql, useQuery } from 'react-apollo';
import gql from 'graphql-tag';


const ProductsList = (props) => {
  const { data, loading, error } = useQuery(queries);
  console.log(data, loading, error, props);

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

const queries = gql`
query poc($id: ID!, $categoryId: Int, $search: String) {
  poc(id: $id) {
    id
    products(categoryId: $categoryId, search: $search) {
      id
      title
      rgb
      images {
        url
      }
      productVariants {
        availableDate
        productVariantId
        price
        inventoryItemId
        shortDescription
        title
        published
        volume
        volumeUnit
        description
        subtitle
        components {
          id
          productVariantId
          productVariant {
            id
            title
            description
            shortDescription
          }
        }
      }
    }
  }
}

`;
export default graphql(queries, { name: 'products' })(ProductsList);
