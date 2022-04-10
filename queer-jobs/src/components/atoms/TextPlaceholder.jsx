import React from 'react';
import styled from 'styled-components';
import { WEIGHTS } from '../constants';

/**
 * ### TextPlaceholder
 * 
 * Estiliza o conteúdo de acordo com a tag de texto renderizada.
 * ATENÇÃO: O texto deve ser inserido dentro de uma tag.
 * 
 * ### Parâmetros
 * 
 * @param {string} color - Cor do texto - suggested_value: [COLORS.black, COLORS.white, COLORS.primary.normal]. Necessário importar CONSTANTS;
 * @param {string} children - Tag e texto - suggested_value: [h1, h2, h3, h4, h6, h7, p];
 * 
 */

function TextPlaceholder({ children, color }) {
  return (
    <Text color={color}>{children}</Text>
  );
};

const Text = styled.div`
  color: ${props => props.color || "black"};
  
  h1 {
    font-size: 3rem;
    font-weight: ${WEIGHTS.bold};
    line-height: 1.17;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: ${WEIGHTS.bold};
    line-height: 1.172;
  }

  h3 {
    font-size: 2rem;
    font-weight: ${WEIGHTS.bold};
    line-height: 1.17;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: ${WEIGHTS.bold};
    line-height: 1.17;
  }

  h5 {
    font-size: 1.125rem;
    font-weight: ${WEIGHTS.regular};
    line-height: 1.17;
  }

  h6 {
    font-size: 1rem;
    font-weight: ${WEIGHTS.bold};
    line-height: 1.17;
  }

  p {
    font-size: 1.25rem;
    font-weight: ${WEIGHTS.regular};
    line-height: 1.4;
  }
`

export default TextPlaceholder