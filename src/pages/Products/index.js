import React, { useState, useEffect } from 'react';

import { graphql, useQuery } from 'react-apollo';
import gql from 'graphql-tag';

import { Container, SearchBar, InputStyle } from './styles';
import ProductsList from './ProductsList';
import MainTemplate from '../../templates/MainTemplate';

const Products = ({ location }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  const { poc } = location.state[0];

  const { data, loading, error } = useQuery(queries, {
    variables: { id: poc[0].id, search, categoryId: null },
  });


  useEffect(() => {
    if(!error && !loading) {
      setProducts(
        data.poc.products
      );
    }
  }, [data, error, loading])

  const handleChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <MainTemplate>
      <SearchBar>
        <InputStyle onChange={handleChangeSearch} value={search} placeholder="Tá procurando o que?" />
      </SearchBar>
      <Container>
        { loading ? (<p style={{color: 'black'}}>Carregando...</p>) : (<ProductsList products={products} />) }
      </Container>
    </MainTemplate>
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
export default graphql(queries, { name: 'products' })(Products);
