import React from 'react';
import { Container, Header } from './styles';
import Input from '../../components/Input';
import Logo from '../../components/Logo';
import Button from '../../components/Button';

const Home = () => (
  <Container>
    <Header>
      <div>
        <Logo />
        <Input />
        <Button title="Entrar" disabled />
      </div>
    </Header>
  </Container>
);

export default Home;
