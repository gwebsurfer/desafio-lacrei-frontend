import styled from 'styled-components';

export const FooterContainer = styled.footer`
  margin: 0 4rem;
  padding: 2rem 0 0.5rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border-top: 0.063rem solid rgb(176 224 211 / 1);

  @media (max-width: 520px) {
    margin: 0 1rem;
    padding-top: 1rem;
  }

  @media (min-width: 521px) and (max-width: 1040px) {
    margin: 0 2rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 2rem;
`;

export const SocialIcon = styled.a`
  color: rgb(1 135 98 / 1);
`;

export const Copyright = styled.p`
  font-size: 0.75rem;
  color: rgb(81 81 81 / 1);
`;
