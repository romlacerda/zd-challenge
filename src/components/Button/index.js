import React from 'react';
import PropTypes from 'prop-types';

import { Container, ButtonStyle } from './styles';

const Button = ({ title, disabled, ...rest }) =>
  <Container>
    <ButtonStyle type="button" disabled={disabled} {...rest}>{title}</ButtonStyle>
  </Container>;

Button.propTypes = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
