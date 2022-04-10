import React from 'react';
import styled from 'styled-components';
import TextPlaceholder from '../atoms/TextPlaceholder';
import { COLORS } from '../constants';
import Spacer from '../atoms/Spacer';

/**
 * ### Parâmetros
 * 
 * @param {string} title - Título do card - suggested_value: '+500';
 * @param {string} description - Descrição do card;
 * 
 */
function NumbersCard({ title, description }) {
  return (
    <Wrapper>
      <TextPlaceholder>
        <h1>{title}</h1>
        <Spacer size={6} />
        <p>{description}</p>
      </TextPlaceholder>
    </Wrapper>
  );
};

// TODO: Refatorar CSS

const Wrapper = styled.div`
  display: flex;
  max-width: 140px;
  h1 {
      background-color: ${COLORS.primary.normal};
      width: fit-content;
      padding: 4px 8px;
    }
  `

export default NumbersCard