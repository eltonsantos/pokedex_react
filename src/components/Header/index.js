import React from 'react';
import {Container, Wrapper} from './styles';
import pokeball from '../../../src/pokeball.png';

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <nav className="header">
          <a href="/" className="left">
            <img src={pokeball} alt="Pokeball" height="50" width="50" className="logo" />
            <strong>Pokedex</strong>
          </a>
        </nav>
      </Wrapper>
    </Container>
  );
}

export default Header;