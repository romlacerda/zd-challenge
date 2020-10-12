import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import { MdAddCircle, MdRemoveCircle } from 'react-icons/md';

const Card = ({ url, title, price, className }) => {
  const priceFormatted = price.toString().replace('.', ',');

  return (
    <Container className={className}>
      <div>
        <div style={{ height: '180px'}}>
          <img src={url} alt={title} />
          <p>{ title }</p>
          <p>{`R$ ${ priceFormatted }`}</p>
        </div>
        <div style={{ display: 'flex' }}>
          <MdAddCircle size={20} color="#fc0"/>
          <MdRemoveCircle size={20} color="#fc0" />
        </div>
      </div>
    </Container>
  )
};

Card.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Card;
