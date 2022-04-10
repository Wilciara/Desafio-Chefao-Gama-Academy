import React from 'react';
import styled from 'styled-components';
import { COLORS, WEIGHTS } from '../constants'

/**
 * ### Parâmetros
 * 
 * @param {string} type - Tipo do link - suggested_value: 'headerLink' or 'bodyLink';
 * @param {string} children - Descrição do link - suggested_value: 'Clique aqui';
 * @param {string} target - href do Link - suggested_value: '/';
 * 
 */
function Link({ children, type, target }) {
  return (
    <LinkStyled className={type} href={target}>{children}</LinkStyled>
  );
};

const LinkStyled = styled.a`
    cursor: pointer;

    &.headerLink{
        color: ${COLORS.black};
        font-weight: ${WEIGHTS.regular};
        font-size: 1.125rem;
        text-decoration: none;

        :hover{
            color: ${COLORS.grey.hover};
        }
    }

    &.bodyLink{
        color: ${COLORS.secondary.normal};
        font-weight: ${WEIGHTS.bold};
        font-size: 1rem;
        text-decoration: underline;
        
        :hover{
            color: ${COLORS.secondary.hover};
        }
    }
    

`

export default Link;