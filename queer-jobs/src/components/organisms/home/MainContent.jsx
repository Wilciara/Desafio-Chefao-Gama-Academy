import React from 'react';
import styled from 'styled-components';
import MainText from "../../molecules/MainText"
import ImagePlaceHolder from "../../atoms/ImagePlaceHolder"

/**
 * TODO:
 * 
 * [ ] Alterar imagem de fundo;
 * [ ] Adicionar confetes;
 * [ ] Adicionar borda arredondada ao background amarelo;
 */

function MainContent() {
  return (
    <Wrapper>
      <TextWrapper>
        <MainText />
      </TextWrapper>

      <ImageWrapper>
        <ImagePlaceHolder imageName="main-image" />
      </ImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: linear-gradient(90deg, #f6f6f6 70%, #fcbf49 30%);
  padding: 0 120px;
  height: 630px;

  display: flex;
  align-items: center;
`

const TextWrapper = styled.div`
  flex: 1;
`

const ImageWrapper = styled.div`
  flex: 1;
`

export default MainContent