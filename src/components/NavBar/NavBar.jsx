import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavBarContainer, StyledLink } from './NavBarStyles';

function getTitle(pathname) {
  const titles = {
    '/': 'Home',
    '/pessoa-usuaria': 'Pessoa Usuária',
    '/profissional': 'Profissional',
  };

  return titles[pathname] || 'Página não encontrada';
}

function NavBar({ variant }) {
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
}

NavBar.propTypes = {
  variant: PropTypes.oneOf(['header', 'footer']).isRequired,
};

export default NavBar;
