import React from 'react';
import { Content, Description, Image, StyledImg } from './PessoaUsuariaStyles';
import ImgPessoaUsuaria from '../../assets/pessoa-usuaria.svg';

const PessoaUsuaria: React.FC = () => {
  return (
    <main className='container'>
      <Content>
        <h1>Pessoa Usuária</h1>
        <Description>
          A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado
          por profissionais de qualidade e que atendam às suas necessidades de
          forma segura e acolhedora.
        </Description>
      </Content>
      <Image>
        <StyledImg
          width='555'
          height='421'
          src={ImgPessoaUsuaria}
          alt=''
          loading='lazy'
        />
      </Image>
    </main>
  );
};

export default PessoaUsuaria;
