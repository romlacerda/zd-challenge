import React from 'react';
import { Container } from './styles';

const Card = ({ title, price, className }) =>
  <Container className={className}>
    <div>
      <p>{ title }</p>
      <p>${`R$ ${ price }`}</p>
      + -
    </div>
  </Container>;

export default Card;
