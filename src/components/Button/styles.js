import styled from 'styled-components';

export const Container = styled.div`
`;

export const ButtonStyle = styled.button`
  height: 42px;
  border: 0;
  border-radius: 20px;

  background: ${(props) => props.disabled ? '#dcdcdc' : '#fc0'};

  color: #2f2f2f;

  padding: 0 16px;
`;
