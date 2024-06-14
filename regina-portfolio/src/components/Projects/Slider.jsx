import React, { useState } from "react";
import styled from "styled-components";
import slideData from "./Project";

const SliderComp = () => {
  const [current, setCurrent] = useState(0);
  const length = slideData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
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
              <img src={slide.image} alt={slide.title} />
              <Description>{slide.description}</Description>
            </>
          )}
        </Slide>
      ))}
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
  max-width: 800px;
  margin: auto;
`;

const Slide = styled.div`
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity 0.5s ease;
  position: absolute;

  img {
    width: 80%;
    height: auto;
  }
`;

const Description = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  text-align: center;
  width: 80%;
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  font-size: 2rem;
  color: white;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

const LeftArrow = styled(Arrow)`
  left: 32px;
`;

const RightArrow = styled(Arrow)`
  right: 32px;
`;
