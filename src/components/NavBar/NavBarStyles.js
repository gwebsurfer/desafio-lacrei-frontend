import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavBarContainer = styled.nav`
  display: flex;
  gap: 2.5rem;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  font-size: 1rem;
  font-weight: ${(props) =>
    props.active || props.variant === 'header' ? '700' : '400'};
  text-decoration: none;
  letter-spacing: -0.3px;
  transition: all 0.2s ease 0s;
  color: ${(props) =>
    props.active && props.variant === 'header'
      ? 'rgb(1, 135, 98)'
      : 'rgb(31, 31, 31)'};
  transform: scaleX(1) scaleY(1.04);
  align-items: center;
  flex-shrink: 0;
  -webkit-box-pack: justify;

  &:hover {
    opacity: 0.7;
  }
`;
