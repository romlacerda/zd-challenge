import React from 'react';
import Header from '../components/Header';
import { Container } from './styles';

const MainTemplate = ({ children }) => {

  return (
    <>
      <Header />
      <Container>
        {children}
      </Container>
    </>
  );
}

export default MainTemplate;
