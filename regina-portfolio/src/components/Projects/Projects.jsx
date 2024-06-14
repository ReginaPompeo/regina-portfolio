import React from "react";
import styled from "styled-components";
import SliderComp from "./Slider"; // Certifique-se que o nome do arquivo está correto
import { Zoom } from "react-awesome-reveal";

const Projects = () => {
  return (
    <Container id="project">
      <Zoom>
        <h1>
          Projetos <span className="green">recentes</span>
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
          doloremque voluptate excepturi porro sed totam quis animi dolorum
          rerum earum.
        </p>
      </Zoom>
      <Slide>
        <SliderComp />
      </Slide>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  padding: 20px;
  text-align: center;
  display: flex;
  width: 80%;
  height: 100vh;
  gap: 2rem;
  justify-content: center;
  flex-direction: column;

  .green {
    color: green;
  }
`;

const Slide = styled.div`
  margin-top: 20rem;
`;
