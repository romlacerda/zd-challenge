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
