import React from 'react';
import { Container, InputStyle } from './styles';

const Input = ({ onChange, className, value, placeholder }) =>
  <Container>
    <InputStyle onChange={onChange} className={className} value={value} placeholder={placeholder} />
  </Container>;

export default Input;
