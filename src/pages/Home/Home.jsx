import { useNavigate } from 'react-router-dom';
import {
  HomeCTA,
  Description,
  ButtonsContainer,
  Image,
  StyledImg,
} from './HomeStyles';
import ImgHome from '../../assets/home.svg';

function Home() {
  const navigate = useNavigate();

  return (
    <main className='container'>
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
        <StyledImg
          width='555'
          height='421'
          src={ImgHome}
          alt=''
          loading='lazy'
        />
      </Image>
    </main>
  );
}

export default Home;
