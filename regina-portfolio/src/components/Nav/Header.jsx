import React, { useState } from "react";
import styled from "styled-components";

const Header = () => {
  const [bar, setBar] = useState(false);
  return (
    <Container bar={bar}>
      <Nav bar={bar}>
        <span>
          <a href="#home">Home</a>
        </span>
        <span>
          <a href="#about">Sobre Mim</a>
        </span>
        <span>
          <a href="#project">Projetos</a>
        </span>
        <span>
          <a href="#experience">Experiências</a>
        </span>
        <span>
          <a href="#contact">Contatos</a>
        </span>
      </Nav>
      <div onClick={() => setBar(!bar)} className="bars">
        <div className="bar"></div>
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  text-align: right;
  justify-content: flex-end; /* Alterado para flex-end */
  width: 80%;
  position: relative;
  animation: header 500ms ease-in-out;
`;

const Nav = styled.nav`
  // Estilos do seu componente Nav
   span {
    margin-left: 1rem;
    font-size: 1.5rem;
    font-family: "Lora", serif;
    font-optical-sizing: auto;
    font-style: normal;
    letter-spacing: 1px;
    a {
       color: #D9D9D9;
      text-decoration: none;
      position: relative;
      font-weight: 530;
      &:before {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 2px; /* Altura do sublinhado */
        background-color: #D9D9D9; /* Cor do sublinhado */
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out;
      }
      &:hover:before {
        visibility: visible;
        transform: scaleX(1);
      }
    }
  }
`;

