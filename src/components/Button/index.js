import React from 'react';
import { Container } from './styles';

const Button = ({ title, disabled, ...rest }) =>
  <Container>
    <button disabled={disabled} {...rest} >{title}</button>
  </Container>;

export default Button;
