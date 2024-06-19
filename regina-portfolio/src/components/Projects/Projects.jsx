import React from "react";
import styled from "styled-components";
import SliderComp from "./Slider"; // Certifique-se de que o nome do arquivo está correto
import { Zoom } from "react-awesome-reveal";

const Projects = () => {
  return (
    <Container id="project">
      <TextContainer>
        <Zoom>
          <h1>
            Projetos recentes
          </h1>
          <p>
          Aqui você encontrará uma seleção dos trabalhos que desenvolvi ao longo da minha carreira, 
          abrangendo tanto o back end quanto o front end. 
          </p>
        </Zoom>
      </TextContainer>
      <SlideContainer>
        <SliderComp />
      </SlideContainer>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 100vh;

`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SlideContainer = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
`;
