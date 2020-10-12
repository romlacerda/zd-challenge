import React from 'react';
import { Container } from './styles';

const Card = ({ url, title, price, className }) => {
  const priceFormatted = price.toString().replace('.', ',');

  return (
    <Container className={className}>
      <div>
        <img src={url} alt={title} />
        <p>{ title }</p>
        <p>{`R$ ${ priceFormatted }`}</p>
        {/* + - */}
      </div>
    </Container>
  )
};

export default Card;
