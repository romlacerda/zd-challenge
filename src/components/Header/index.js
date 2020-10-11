import React from 'react';
import { Container } from './styles';
import Input from '../Input';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <Container>
      <div>
        <Logo />
        <Input />
        <Button title="Entrar" disabled />
      </div>
    </Container>
  )
};

export default Header;
