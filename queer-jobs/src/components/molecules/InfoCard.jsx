import React from 'react';
import Icon from '../atoms/Icon';
import TextPlaceholder from "../atoms/TextPlaceholder";
import Spacer from "../atoms/Spacer";
import styled from "styled-components";

/**
 * ### Parâmetros
 * 
 * @param {string} icon - Tipo do ícone. - suggested_value: ["heart", "trophy", "verified"];
 * @param {string} iconBackground - Define se o ícone possui background. Preencher apenas se necessáro. - suggested_value: true or false;
 * @param {string} title - Título do card - suggested_value: 'Cursos e Eventos';
 * @param {string} description - Descrição do card 
 * 
 */
function InfoCard({ icon, iconBackground, title, description }) {
  return (
    <Wrapper>
      <Icon type={icon} background={iconBackground} />
      <Spacer size={32} />
      <TextPlaceholder>
        <h3>{title}</h3>
        <Spacer size={24} />
        <p>{description}</p>
      </TextPlaceholder>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 335px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export default InfoCard