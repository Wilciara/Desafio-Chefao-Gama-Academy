import React from 'react'
import styled from 'styled-components'
import PlanCard from '../../molecules/PlanCard';
import TextPlaceholder from '../../atoms/TextPlaceholder';
import Spacer from '../../atoms/Spacer';

function PlansContent() {

  // TODO: Criar borda no meio dos planos

  const planCards = [
    {
      image: 'home-plans-1',
      plan: 'Plano 1',
      title: 'Para Candidatos',
      description: 'Tenha o seu perfil profissional disponível em uma plataforma de talentos LGBTQIA+ buscades por empresas e startups previamente certificadas pela plataforma.',
      buttonLabel: 'Criar meu perfil de candidato',
      buttonType: 'primary',
      buttonSize: 'md'
    },
    {
      image: 'home-plans-2',
      plan: 'Plano 2',
      title: 'Para Empresas',
      description: 'Encontre profissionais de tecnologia, marketing, product design e sales qualificades para suas vagas de forma ágil e segura em uma plataforma única. Tudo isso com o suporte da equipe da Queer Jobs.',
      buttonLabel: 'Criar meu perfil de empresa',
      buttonType: 'secondary',
      buttonSize: 'md'
    },
  ]

  return (
    <Wrapper>
      <TextPlaceholder>
        <h2>Como funcionam nossos planos</h2>
      </TextPlaceholder>
      <Spacer size={55} />
      <PlansWrapper>
        {planCards.map(planCard => {
          return <PlanCard
            image={planCard.image}
            plan={planCard.plan}
            title={planCard.title}
            description={planCard.description}
            buttonLabel={planCard.buttonLabel}
            buttonType={planCard.buttonType}
            key={planCard.plan}
            buttonSize={planCard.buttonSize}
          />
        })}
      </PlansWrapper>
    </Wrapper>
  );
};

const PlansWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 120px;
`

export default PlansContent