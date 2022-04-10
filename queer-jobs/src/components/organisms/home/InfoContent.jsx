import React from 'react';
import styled from 'styled-components';
import InfoCard from '../../molecules/InfoCard';

// TODO: Maneira para alinhar corretamente a altura dos cartões, sem gambiarra no título 2;

function InfoContent() {
  const cards = [
    {
      icon: "heart",
      iconBackground: true,
      title: "Plataforma gratuita para candidates",
      description: "É gratuita e sempre será! Faça o seu cadastro agora e comece a se conectar com empresas inclusivas que promovem a diversidade no ambiente profissional."
    },
    {
      icon: "trophy",
      iconBackground: true,
      title: "Cursos e eventos exclusivos",
      description: "Área onde nossos parceiros disponibilizam cursos, lives e palestras para capacitação dos candidates e para cultura das empresas."
    },
    {
      icon: "verified",
      iconBackground: true,
      title: "Seus dados estão seguros aqui",
      description: "A privacidade do seu perfil dentro da plataforma é definida por você. Fique à vontade para escolher quais empresas e segmentos podem visitar o seu perfil."
    }
  ];

  return (
    <Wrapper>
      {cards.map(card => {
        return <InfoCard
          icon={card.icon}
          iconBackground={card.iconBackground}
          title={card.title}
          description={card.description}
        />
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 115px;
`

export default InfoContent