import React, { useState } from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard"; // Importe o componente ProjectCard
import slideData from "./Project"; // Certifique-se de que o caminho esteja correto

const SliderComp = () => {
  const [current, setCurrent] = useState(0);
  const [showCard, setShowCard] = useState(false); // Estado para controlar se o card está aberto
  const length = slideData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const openCard = () => {
    setShowCard(true);
  };

  const closeCard = () => {
    setShowCard(false);
  };

  if (!Array.isArray(slideData) || slideData.length <= 0) {
    return null;
  }

  return (
    <SliderContainer>
      <LeftArrow onClick={prevSlide}>&#10094;</LeftArrow>
      <RightArrow onClick={nextSlide}>&#10095;</RightArrow>
      {slideData.map((slide, index) => (
        <Slide key={index} isActive={index === current}>
          {index === current && (
            <>
              <ImageContainer onClick={openCard}>
                <img src={slide.image} alt={slide.title} />
                <Title>{slide.title}</Title>
              </ImageContainer>
            </>
          )}
        </Slide>
      ))}
      {showCard && (
        <ProjectCard
          project={slideData[current]}
          onClose={closeCard}
        />
      )}
    </SliderContainer>
  );
};

export default SliderComp;

const SliderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: auto;
`;

const Slide = styled.div`
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity 0.5s ease;
  position: relative;
  text-align: center;
`;

const ImageContainer = styled.div`
  cursor: pointer; /* Adicionado para indicar que é clicável */
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const Title = styled.h2`
  font-size: 1.5em;
  color: #333;
`;

const Arrow = styled.div`
  position: absolute;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  user-select: none;
  transform: translateY(-50%);
`;

const LeftArrow = styled(Arrow)`
  left: -50px;
`;

const RightArrow = styled(Arrow)`
  right: -50px;
`;
