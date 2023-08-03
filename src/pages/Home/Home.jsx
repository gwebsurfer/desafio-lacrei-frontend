import { useNavigate } from 'react-router-dom';
import {
  HomeContainer,
  HomeCTA,
  Description,
  ButtonsContainer,
  Image,
} from './HomeStyles';
import ImgHome from '../../assets/home.svg';

function Home() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <HomeCTA>
        <h1>Boas vindas a Lacrei Saúde</h1>
        <Description>
          Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+
        </Description>
        <ButtonsContainer>
          <button
            className='primary-button'
            onClick={() => navigate('/pessoa-usuaria')}
          >
            Pessoa Usuária
          </button>
          <button
            className='secondary-button'
            onClick={() => navigate('/profissional')}
          >
            Profissional
          </button>
        </ButtonsContainer>
      </HomeCTA>
      <Image>
        <img width='100%' height='421' src={ImgHome} alt='' loading='lazy' />
      </Image>
    </HomeContainer>
  );
}

export default Home;
