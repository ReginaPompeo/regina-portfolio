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

const Container = styled.div``

const Nav = styled.div``
