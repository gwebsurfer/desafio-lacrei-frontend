import React from 'react';
import { Content, Description, Image, StyledImg } from './ProfissionalStyles';
import ImgProfissional from '../../assets/profissional.svg';

const Profissional: React.FC = () => {
  return (
    <main className='container'>
      <Content>
        <h1>Profissional</h1>
        <Description>
          Buscamos recrutar pessoas profissionais da saúde que entendam as
          necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+
        </Description>
      </Content>
      <Image>
        <StyledImg
          width='555'
          height='421'
          src={ImgProfissional}
          alt=''
          loading='lazy'
        />
      </Image>
    </main>
  );
};

export default Profissional;
