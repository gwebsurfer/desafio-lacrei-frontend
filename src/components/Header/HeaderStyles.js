import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 0.5rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  background-color: rgb(238 238 238 / 1);
`;

export const StyledLink = styled(Link)`
  font-size: 2rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s ease 0s;
  color: rgb(1 135 98 / 1);
  transform: scaleX(0.975) scaleY(1.04);
  font-style: normal;
  line-height: normal;

  &:hover {
    opacity: 0.7;
  }
`;
