import React from 'react';
import styled from 'styled-components';
import heart from '../../../public/assets/icons/heart.svg';
import trophy from '../../../public/assets/icons/trophy.svg';
import Verified from '../../../public/assets/icons/Verified.svg';
import { COLORS, RADIUS } from '../constants'

const icons = {
  heart: heart,
  trophy: trophy,
  verified: Verified,
};

/**
 * 
 * ### Parâmetros
 * 
 * @param {string} type - Tipo do ícone. - suggested_value: ["heart", "trophy", "verified"]
 * @param {string} size - Tamanho do ícone. Preencher apenas se necessáro. - suggested_value: "" ou "200"
 * @param {boolean} background - Define se o ícone possui background. Preencher apenas se necessáro. - suggested_value: true or false
 * 
 */

const Icon = ({ type, size, background }) => {
  const src = icons[type];
  const backgroundClass = background ? 'iconBackground' : '';
  const iconPadding = background ? 9 : 0;

  return (
    <Wrapper className={backgroundClass}>
      <IconWrapper src={src} size={size} iconPadding={iconPadding} />
    </Wrapper>
  );

}


const Wrapper = styled.div`
  &.iconBackground {
    background-color: ${COLORS.grey.primary};
    width: 60px;
    height: 60px;
    border-radius: ${RADIUS.md};
  
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const IconWrapper = styled.img`
  width: ${props => `${props.size}px`};
  padding: ${props => `${props.iconPadding}px`};
`


export default Icon