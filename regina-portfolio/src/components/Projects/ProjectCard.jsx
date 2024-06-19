import React from "react";
import styled, { keyframes } from "styled-components";
import { FaReact, FaGithub } from "react-icons/fa"; // Importe os ícones necessários

const ProjectCard = ({ project, onClose }) => {
  // Determine qual ícone será renderizado com base no valor de project.icons
  const renderIcon = () => {
    if (project.icons === "FaReact") {
      return <ReactIcon />;
    } else if (project.icons === "FaGithub") {
      return <GithubIcon />;
    } else {
      return null; // Caso nenhum ícone correspondente seja encontrado
    }
  };

  return (
    <CardOverlay>
      <Card>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Title>{project.title}</Title>
        <img src={project.image} alt={project.title} />
        <Description>{project.description}</Description>
        {project.url && (
          <StyledButton
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Website
          </StyledButton>
        )}
        {project.github && (
          <StyledButton
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </StyledButton>
        )}
        <Details>
          <DetailLabel>Tecnologia:</DetailLabel>
          <DetailValue>{project.tecnology}</DetailValue>
        </Details>
        <IconsContainer>{renderIcon()}</IconsContainer>
        <Details>
          <DetailLabel>Desenvolvido por:</DetailLabel>
          <DetailValue>{project.team}</DetailValue>
        </Details>
      </Card>
    </CardOverlay>
  );
};

export default ProjectCard;

// Estilos adicionados para os ícones
const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

// Estilos para o ícone React
const ReactIcon = styled(FaReact)`
  color: #61dafb; /* Cor para o ícone React */
  font-size: 3rem; /* Ajuste o tamanho do ícone React */
  margin-right: 10px;
`;

// Estilos para o ícone Github
const GithubIcon = styled(FaGithub)`
  color: #333; /* Cor para o ícone Github */
  font-size: 3rem; /* Ajuste o tamanho do ícone Github */
  margin-right: 10px;
`;

// Keyframes para a animação da linha em volta do botão
const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const CardOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  max-width: 60%;
  max-height: 80%;
  overflow-y: auto;
  text-align: center;
  background-image: linear-gradient(to right, #63d0ff, #b089e4, #fd42c9);
  padding: 2rem 5rem;
  position: relative; /* Adicione para posicionar corretamente o botão de fechar */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: white; /* Cor do ícone de fechar */
  z-index: 10; /* Ajuste a ordem z-index conforme necessário */
`;

const Title = styled.h2`
  margin: 3rem 0;
  font-size: 1.5em;
  color: #333;
`;

const Description = styled.p`
  color: #f5f5f5;
  line-height: 1.6;
  text-align: justify;
  padding: 2rem 5rem;
  font-size: 1rem;
`;

const Details = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

const DetailLabel = styled.span`
  font-weight: bold;
  margin-right: 5px;
  color: #fd42c9;
`;

const DetailValue = styled.span`
  color: #333;
`;

const StyledButton = styled.a`
  display: inline-block;
  margin-top: 10px;
  margin-right: 5rem; /* Espaçamento entre os botões */
  margin-left: 5rem;
  padding: 2rem 2rem;
  background-color: black; /* Fundo preto */
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  

  &:before {
  content: "";
  position: absolute;
  width: 150%; /* Aumentar o tamanho da camada rosa */
  height: 150%; /* Aumentar o tamanho da camada rosa */
  background: linear-gradient(to right, #fd42c9, #fd42c9 50%, transparent 50%);
  animation: rotateAnimation 3s linear infinite;
  z-index: 1; /* Coloca a borda animada atrás do conteúdo */
  
  /* Centralizar e ajustar a origem da rotação */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  }

  &:hover:before {
    transform: translate(-50%, -50%);
  }

  &:hover {
    background-color: black;
  }

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    height: 90%;
    background-color: black; /* Camada preta menor */
    border-radius: 4px;
    transform: translate(-50%, -50%);
    z-index: 2; /* Coloca a camada preta menor por cima de todas */
  }
`;
