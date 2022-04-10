import React from 'react';
import styled from 'styled-components';
import { COLORS, WEIGHTS, RADIUS } from '../constants'

const sizes = {
  sm: {
    padding: '7px 52px',
    fontSize: '1rem'
  },
  md: {
    padding: '14px 24px',
    fontSize: '1rem'
  },
  lg: {
    padding: '24px 36px',
    fontSize: '1.25rem'
  }
}

/**
 * ### Parâmetros
 * 
 * @param {string} type - Tipo do botão - suggested_value: 'primary' or 'secondary';
 * @param {string} children - Label do botão - suggested_value: 'Clique aqui';
 * @param {string} size - Tamanho do botão - suggested_value: ['sm', 'md', 'lg']';
 * 
 */

function Button({ type, children, size }) {
  const paddingSize = sizes[size].padding;
  const fontSize = sizes[size].fontSize;

  return (
    <ButtonStyled
      className={type}
      fontSize={fontSize}
      paddingSize={paddingSize}
    >
      {children}
    </ButtonStyled>
  );
};


const ButtonStyled = styled.button`
  font-size: ${props => props.fontSize || '1rem'};
  font-weight: ${WEIGHTS.bold};
  border: none;
  cursor: pointer;
  padding: ${props => props.paddingSize || '14px 24px'};

  &.primary {
    background-color: ${COLORS.primary.normal};
    border-radius: ${RADIUS.sm};
    color: ${COLORS.black};

    :hover {
      background-color: ${COLORS.primary.hover};
    }

    :active {
      background-color: ${COLORS.primary.active};
    }
  }

  &.secondary {
    background-color: ${COLORS.secondary.normal};
    border-radius: ${RADIUS.sm};
    color: ${COLORS.white};

    :hover {
      background-color: ${COLORS.secondary.hover};
    }

    :active {
      background-color: ${COLORS.secondary.active};
    }
  }
`



export default Button