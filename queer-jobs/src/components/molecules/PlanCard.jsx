import React from 'react';
import Spacer from '../atoms/Spacer';
import Button from '../atoms/Button';
import TextPlaceholder from '../atoms/TextPlaceholder';
import ImagePlaceholder from '../atoms/ImagePlaceholder';
import styled from 'styled-components';


/**
 * ### Parâmetros
 * 
 * @param {string} image - Nome da imagem a ser renderizada. Usar nome do asset sem extensão - suggested_value: ['home-plans-1', 'home-plans-2']
 * @param {string} plan - Nome do plano - suggested_value: 'Plano 1';
 * @param {string} title - Título do card - suggested_value: 'Para candidatos';
 * @param {string} description - Descrição do card
 * @param {string} buttonLabel - Label do botão - suggested_value: 'Clique aqui';
 * @param {string} buttonType - Tipo do botão - suggested_value: 'primary' or 'secondary';
 * @param {string} buttonSize - Tamanho do botão - suggested_value: ['sm', 'md', 'lg']';
 * 
 */
function PlanCard({ image, plan, title, description, buttonLabel, buttonType, buttonSize }) {
  return (
    <Wrapper>
      <ImagePlaceholder imageName={image} />
      <Spacer size={24} />
      <TextPlaceholder>
        <h6>{plan}</h6>
        <Spacer size={24} />
        <h3>{title}</h3>
        <Spacer size={24} />
        <p>{description}</p>
      </TextPlaceholder>
      <Spacer size={40} />
      <Button type={buttonType} size={buttonSize}>{buttonLabel}</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 491px;
`
export default PlanCard