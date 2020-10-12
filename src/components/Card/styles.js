import styled from 'styled-components';

export const Container = styled.div`

  > div {
    width: 100%;
    border: 1px solid #dcdcdc;
    border-radius: 8px;
    color: #000;
    height: 250px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 16px;

    font-size: 14px;
    text-align: center;

    img {
      width: 35%;
      margin-bottom: 16px;
    }
  }

`;
