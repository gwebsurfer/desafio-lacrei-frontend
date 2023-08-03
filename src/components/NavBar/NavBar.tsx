import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NavBarContainer, StyledLink } from './NavBarStyles';

interface NavBarProps {
  variant: 'header' | 'footer';
}

function getTitle(pathname: string): string {
  const titles: { [key: string]: string } = {
    '/': 'Home',
    '/pessoa-usuaria': 'Pessoa Usuária',
    '/profissional': 'Profissional',
  };

  return titles[pathname] || 'Página não encontrada';
}

const NavBar: React.FC<NavBarProps> = ({ variant }) => {
  const location = useLocation();

  useEffect(() => {
    const title = getTitle(location.pathname);
    document.title = `${title} | Desafio Lacrei`;
  }, [location]);

  return (
    <NavBarContainer $variant={variant}>
      <StyledLink $active={location.pathname === '/'} $variant={variant} to='/'>
        Home
      </StyledLink>
      <StyledLink
        $active={location.pathname === '/pessoa-usuaria'}
        $variant={variant}
        to='/pessoa-usuaria'
      >
        Pessoa Usuária
      </StyledLink>
      <StyledLink
        $active={location.pathname === '/profissional'}
        $variant={variant}
        to='/profissional'
      >
        Profissional
      </StyledLink>
    </NavBarContainer>
  );
};

export default NavBar;
