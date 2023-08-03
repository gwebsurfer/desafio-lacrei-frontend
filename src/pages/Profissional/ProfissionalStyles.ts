import styled from 'styled-components';

export const Content = styled.div`
  max-width: 540px;
  display: block;
`;

export const Description = styled.p`
  margin-top: 2rem;
  line-height: 2rem;
  padding-left: 1rem;
  border-left: 5px solid rgb(1 135 98 / 1);
  font-size: 1.5rem;
  color: rgb(81 81 81 / 1);

  @media (max-width: 1040px) {
    margin-top: 1rem;
    line-height: 1.5rem;
    font-size: 1rem;
  }
`;

export const Image = styled.div`
  padding: 0;
  margin: 0;
  height: 421px;
  max-width: 540px;
  display: block;
`;

export const StyledImg = styled.img`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
