import styled from 'styled-components';

export const HomeCTA = styled.div`
  max-width: 540px;
  display: block;
`;

export const Description = styled.p`
  margin-top: 2rem;
  line-height: 2rem;
  font-size: 1.5rem;
  color: rgb(81 81 81 / 1);

  @media (max-width: 520px) {
    margin-top: 0.875rem;
    line-height: 1.25rem;
    font-size: 0.875rem;
  }

  @media (min-width: 521px) and (max-width: 1040px) {
    margin-top: 1rem;
    line-height: 1.5rem;
    font-size: 1rem;
  }
`;

export const ButtonsContainer = styled.div`
  padding-top: 3rem;
  max-width: 453px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 520px) {
    flex-direction: column;
    gap: 1rem;
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
