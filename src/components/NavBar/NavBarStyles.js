import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavBarContainer = styled.nav`
  display: flex;
  gap: 2.5rem;
  justify-content: space-between;

  @media (max-width: 520px) {
    flex-direction: ${(props) =>
      props.$variant === 'header' ? 'row' : 'column'};
    gap: ${(props) => (props.$variant === 'header' ? '1rem' : '0.25rem')};
  }

  @media (min-width: 521px) and (max-width: 1040px) {
    gap: ${(props) => (props.$variant === 'header' ? '2rem' : '2.5rem')};
  }
`;

export const StyledLink = styled(Link)`
  font-size: 1rem;
  font-weight: ${(props) =>
    props.$active || props.$variant === 'header' ? '700' : '400'};
  text-decoration: none;
  transition: all 0.2s ease 0s;
  color: ${(props) =>
    props.$active && props.$variant === 'header'
      ? 'rgb(1, 135, 98)'
      : 'rgb(31, 31, 31)'};
  align-items: center;
  flex-shrink: 0;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 520px) {
    font-size: 0.875rem;
  }
`;
