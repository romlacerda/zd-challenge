import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background: #2f2f2f;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  .location-search-input {
    width: 500px;
    border-radius: 20px;
    height: 42px;
    padding: 0 16px;
  }

  > div {
    width: 1000px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
