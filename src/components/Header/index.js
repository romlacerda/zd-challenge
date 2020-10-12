import React, { useContext } from 'react';
import { Container } from './styles';
import Logo from '../Logo';
import Button from '../Button';
import LocationSearchInput from '../LocationSearchInput';
import { useHistory } from "react-router-dom";
import { AppContext } from '../../App';

const Header = (props) => {
  const { state } = useContext(AppContext);

  const history = useHistory();
  const handleSearch = () => {
    history.push('/produtos', [state]);
  }

  return (
    <Container>
      <div>
        <Logo />
        <LocationSearchInput />
        <Button title="Pesquisar" onClick={handleSearch}/>
        <Button title="Entrar" disabled />
      </div>
    </Container>
  )
};

export default Header;
