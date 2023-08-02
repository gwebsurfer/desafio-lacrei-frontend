import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavBarContainer } from './NavBarStyles';

function NavBar({ variant }) {
  return (
    <NavBarContainer variant={variant}>
      <Link to='/'>Home</Link>
      <Link to='/pessoa-usuaria'>Pessoa Usuária</Link>
      <Link to='/profissional'>Profissional</Link>
    </NavBarContainer>
  );
}

NavBar.propTypes = {
  variant: PropTypes.oneOf(['header', 'footer']).isRequired,
};

export default NavBar;
