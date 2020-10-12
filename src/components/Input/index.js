import React from 'react';
import PropTypes from 'prop-types';

import { Container, InputStyle } from './styles';

const Input = ({ onChange, className, value, placeholder }) =>
  <Container>
    <InputStyle onChange={onChange} className={className} value={value} placeholder={placeholder} />
  </Container>;

Input.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

Input.defaultProps = {
  onChange: () => {},
};

export default Input;
