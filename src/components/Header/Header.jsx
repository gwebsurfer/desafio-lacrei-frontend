import NavBar from '../NavBar/NavBar';
import { HeaderContainer, StyledLink } from './HeaderStyles';

function Header() {
  return (
    <HeaderContainer>
      <StyledLink to='/'>Lacrei</StyledLink>
      <NavBar variant='header' />
    </HeaderContainer>
  );
}

export default Header;
