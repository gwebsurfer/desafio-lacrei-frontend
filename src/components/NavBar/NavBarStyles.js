import styled from 'styled-components';

export const NavBarContainer = styled.nav`
  display: flex;
  gap: 2.5rem;
  justify-content: space-between;
  background-color: ${(props) =>
    props.variant === 'header' ? 'blue' : 'green'};
`;
