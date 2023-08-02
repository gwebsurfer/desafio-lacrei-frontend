import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import { HeaderContainer } from './HeaderStyles';

function Header() {
  return (
    <HeaderContainer>
      <Link to='/'>Lacrei</Link>
      <NavBar variant='header' />
    </HeaderContainer>
  );
}

export default Header;
