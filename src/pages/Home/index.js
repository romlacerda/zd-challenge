import React from 'react';
import { Container, Header } from './styles';
import Input from '../../components/Input';
import Logo from '../../components/Logo';

const Home = () => (
  <Container>
    <Header>
      <Logo />
      <Input />
    </Header>
  </Container>
);

export default Home;
