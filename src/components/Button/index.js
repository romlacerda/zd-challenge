import React from 'react';
import { Container } from './styles';

const Button = ({ title, disabled }) =>
  <Container>
    <button disabled={disabled}>{title}</button>
  </Container>;

export default Button;
