import {
  Copyright,
  FooterContainer,
  SocialIcon,
  SocialIcons,
} from './FooterStyles';
import NavBar from '../NavBar/NavBar';

function Footer() {
  return (
    <FooterContainer>
      <NavBar variant='footer' />
      <SocialIcons>
        <SocialIcon
          target='_blank'
          href='https://www.instagram.com/lacrei.saude'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            fill='currentColor'
            viewBox='0 0 256 256'
          >
            <rect width='256' height='256' fill='none'></rect>
            <circle
              cx='128'
              cy='128'
              r='40'
              fill='none'
              stroke='currentColor'
              strokeMiterlimit='10'
              strokeWidth='16'
            ></circle>
            <rect
              x='36'
              y='36'
              width='184'
              height='184'
              rx='48'
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='16'
            ></rect>
            <circle cx='180' cy='76' r='12'></circle>
          </svg>
        </SocialIcon>
        <SocialIcon
          target='_blank'
          href='https://www.facebook.com/lacrei.saude'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            fill='currentColor'
            viewBox='0 0 256 256'
          >
            <rect width='256' height='256' fill='none'></rect>
            <circle
              cx='128'
              cy='128'
              r='96'
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='16'
            ></circle>
            <path
              d='M168,88H152a23.9,23.9,0,0,0-24,24V224'
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='16'
            ></path>
            <line
              x1='96'
              y1='144'
              x2='160'
              y2='144'
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='16'
            ></line>
          </svg>
        </SocialIcon>
        <SocialIcon
          target='_blank'
          href='https://www.linkedin.com/company/lacrei'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            fill='currentColor'
            viewBox='0 0 256 256'
          >
            <rect width='256' height='256' fill='none'></rect>
            <rect
              x='36'
              y='36'
              width='184'
              height='184'
              rx='8'
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='16'
            ></rect>
            <line
              x1='120'
              y1='112'
              x2='120'
              y2='176'
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='16'
            ></line>
            <line
              x1='88'
              y1='112'
              x2='88'
              y2='176'
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='16'
            ></line>
            <path
              d='M120,140a28,28,0,0,1,56,0v36'
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='16'
            ></path>
            <circle cx='88' cy='80' r='12'></circle>
          </svg>
        </SocialIcon>
      </SocialIcons>
      <Copyright>Desafio Front-end Lacrei</Copyright>
    </FooterContainer>
  );
}

export default Footer;
