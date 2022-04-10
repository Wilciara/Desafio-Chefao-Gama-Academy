import React from 'react';
import styled from 'styled-components';
import logo from '../../../public/assets/logo.svg'

/**
 * 
 * ### Parâmetros
 * 
 * @param {string} size - Tamanho do logo. Preencher apenas se necessáro. - suggested_value: "200"
 * 
 */
function Logo({ size }) {
  return (
    <Link href='/'>
      <LogoWrapper src={logo} size={size} />
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`

const LogoWrapper = styled.img`
  width: ${props => `${props.size}px`};
`

export default Logo