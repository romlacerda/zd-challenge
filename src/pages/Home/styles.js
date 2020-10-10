import styled from 'styled-components';
import bgHome from '../../assets/images/bg-home.jpeg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${bgHome});
  background-size: 100%;
`;

export const Header = styled.div`
  width: 100%;
  background: #2f2f2f;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 1000px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
