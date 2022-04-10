import React from 'react'
import NumbersCard from '../../molecules/NumbersCard'
import TextPlaceholder from '../../atoms/TextPlaceholder'
import styled from 'styled-components';
import { COLORS, RADIUS } from '../../constants';

// TODO: Refatorar CSS e melhorar código do return

function NumbersContent() {
  const numbersCards = [
    {
      title: '+500',
      description: 'Candidates contratades em todo Brasil'
    },
    {
      title: '+150',
      description: 'Empresas cadastradas na plataforma'
    },
    {
      title: '+2k',
      description: 'Vagas disponíveis na plataforma'
    },
  ]

  return (
    <Wrapper>
      <TextPlaceholder>
        <h2>Números que deixam o coração quentinho</h2>
      </TextPlaceholder>
      {numbersCards.map(card => {
        return (
          <NumbersCard
            key={card.title}
            title={card.title}
            description={card.description}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${COLORS.grey.primary};
  padding: 95px;
  margin: 0 120px;

  border-radius: ${RADIUS.lg};

  h2 {
    max-width: 330px;
  }
`

export default NumbersContent