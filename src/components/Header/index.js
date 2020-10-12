import React, { useContext } from 'react';
import { getHours, getMinutes, getYear, getMonth, getDay } from 'date-fns';
import { Container } from './styles';
import Logo from '../Logo';
import Button from '../Button';
import LocationSearchInput from '../LocationSearchInput';
import { useHistory } from "react-router-dom";
import { AppContext } from '../../App';

import { graphql, useQuery } from 'react-apollo';
import gql from 'graphql-tag';

const Header = () => {
  const { state, dispatch } = useContext(AppContext);

  const { lat, lng, poc } = state;

  const hour = getHours(new Date());
  const minutes = getMinutes(new Date());
  const day = getDay(new Date());
  const year = getYear(new Date());
  const month = getMonth(new Date());

  const { data, loading, error } = useQuery(queries, {
    variables: { now: new Date(year, month, day, hour, minutes), algorithm: 'NEAREST', lat, long: lng },
    onCompleted: data => dispatch({ type: 'changePoc', payload: data.pocSearch }),
    onError: error => console.log(error),
  });

  const history = useHistory();

  const handleSearch = () => {
    history.push('/produtos', [state]);
  }

  return (
    <Container>
      <div>
        <Logo />
        <LocationSearchInput />
        <Button title="Pesquisar" onClick={handleSearch} disabled={!poc}/>
        <Button title="Entrar" disabled />
      </div>
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
export default graphql(queries, { name: 'poc' })(Header);
