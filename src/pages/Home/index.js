import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import MainTemplate from '../../templates/MainTemplate';

const Home = ({ children }) => {

  return (
    <MainTemplate>
      <Container>
        {children}
      </Container>
    </MainTemplate>
  )
};

Home.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default Home;
