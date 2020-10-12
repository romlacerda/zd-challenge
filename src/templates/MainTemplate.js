import React from 'react';
import Header from '../components/Header';
import { Container, Footer } from './styles';

const MainTemplate = ({ children }) => {

  return (
    <>
      <Header />
      <Container>
        {children}
      </Container>
      <Footer />
    </>
  );
}

export default MainTemplate;
