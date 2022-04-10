import React from 'react'
import styled from 'styled-components';
import TextPlaceholder from '../atoms/TextPlaceholder';
import Spacer from '../atoms/Spacer';
import Button from '../atoms/Button'
import Link from '../atoms/Link'

function MainText() {
  return (
    <Wrapper>
      <TextWrapper>
        <TextPlaceholder>
          <h1>
            Conecte-se ao mercado inclusivo, diversificado e real
          </h1>
          <Spacer size={24} />
          <p>
            Aqui oportunidades encontram talentos e talentos encontram oportunidades. Com uma condição: os mesmos valores.
          </p>
        </TextPlaceholder>
      </TextWrapper>
      <Spacer size={80} />
      <ButtonsGroup>
        <Button type="primary" size="md">Criar perfil do candidato</Button>
        <Spacer size={24} />
        <Link type="bodyLink">Cadastrar minha empresa</Link>
      </ButtonsGroup>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 472px;
`
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 414px;
`

const ButtonsGroup = styled.div`
  display: flex;
  align-items: center;
`

export default MainText