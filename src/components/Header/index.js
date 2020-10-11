import React from 'react';
import { Container } from './styles';
import Input from '../Input';
import Logo from '../Logo';
import Button from '../Button';
import LocationSearchInput from '../LocationSearchInput';

const Header = () => {
  return (
    <Container>
      <div>
        <Logo />
        <LocationSearchInput />
        <Button title="Entrar" disabled />
      </div>
    </Container>
  )
};

export default Header;
