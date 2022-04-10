import styled from 'styled-components';

function getHeight({ axis, size }) {
  return axis === 'horizontal' ? 1 : size;
}

function getWidth({ axis, size }) {
  return axis === 'vertical' ? 1 : size;
}

/**
 * ### Spacer
 * 
 * Componente de Layout que renderiza espaço em branco de acordo com a axis (horizontal ou vertical);
 * 
 * ### Parâmetros
 * 
 * @param {integer} size - suggested_value: 12 
 * 
 */

const Spacer = styled.span`
  display: block;
  width: ${getWidth}px;
  min-width: ${getWidth}px;
  height: ${getHeight}px;
  min-height: ${getHeight}px;
`;

export default Spacer;