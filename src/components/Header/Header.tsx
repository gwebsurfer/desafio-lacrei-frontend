import React from 'react';
import NavBar from '../NavBar/NavBar';
import { HeaderContainer, StyledLink } from './HeaderStyles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <StyledLink to='/'>Lacrei</StyledLink>
      <NavBar variant='header' />
    </HeaderContainer>
  );
};

export default Header;
