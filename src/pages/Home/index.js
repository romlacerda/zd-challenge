import React, { useContext } from 'react';
import { Container } from './styles';
import { AppContext } from '../../App';

import { graphql, useQuery } from 'react-apollo';
import gql from 'graphql-tag';

const Home = ({ children }) => {
  const { state, dispatch } = useContext(AppContext);

  const { lat, lng } = state;

  const { data, loading, error } = useQuery(queries, {
    variables: { now: new Date(2020, 10, 10, 10), algorithm: 'NEAREST', lat, long: lng },
    // pollInterval: 10000,
    onCompleted: data => dispatch({ type: 'changePoc', payload: data.pocSearch }),
    // onError: error => console.log(error),
  });
  console.log(state, 'aqui');
  return (
    <Container>
      {children}
    </Container>
  )
};


const queries = gql`
query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
  pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
    __typename
    id
    status
    tradingName
    officialName
    deliveryTypes {
      __typename
      pocDeliveryTypeId
      deliveryTypeId
      price
      title
      subtitle
      active
    }
    paymentMethods {
      __typename
      pocPaymentMethodId
      paymentMethodId
      active
      title
      subtitle
    }
    pocWorkDay {
      __typename
      weekDay
      active
      workingInterval {
        __typename
        openingTime
        closingTime
      }
    }
    address {
      __typename
      address1
      address2
      number
      city
      province
      zip
      coordinates
    }
    phone {
      __typename
      phoneNumber
    }
  }
}


`;
export default graphql(queries, { name: 'poc' })(Home);
