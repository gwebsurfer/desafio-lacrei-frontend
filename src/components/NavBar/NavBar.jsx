import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavBarContainer, StyledLink } from './NavBarStyles';

function NavBar({ variant }) {
  const location = useLocation();

  useEffect(() => {
    let title;

    switch (location.pathname) {
      case '/':
        title = 'Home';
        break;
      case '/pessoa-usuaria':
        title = 'Pessoa Usuária';
        break;
      case '/profissional':
        title = 'Profissional';
        break;
      default:
        title = 'Página não encontrada';
    }

    document.title = `${title} | Desafio Lacrei`;
  }, [location]);

  return (
    <NavBarContainer>
      <StyledLink active={location.pathname === '/'} variant={variant} to='/'>
        Home
      </StyledLink>
      <StyledLink
        active={location.pathname === '/pessoa-usuaria'}
        variant={variant}
        to='/pessoa-usuaria'
      >
        Pessoa Usuária
      </StyledLink>
      <StyledLink
        active={location.pathname === '/profissional'}
        variant={variant}
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
