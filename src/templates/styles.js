import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:first-child {
    width: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Footer = styled.footer`
  width: 100vw;
  height: 50px;
  background-color: #fc3;
`
