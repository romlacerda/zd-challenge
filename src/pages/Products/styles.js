import styled from 'styled-components';
import Input from '../../components/Input';

export const Container = styled.div`
  background-size: 100%;
  background: #fff;
`;

export const SearchBar = styled.div`
  width: 100vw;
  height: 70px;
  background: #fc3;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputStyle = styled(Input)`
    width: 500px;
`;
