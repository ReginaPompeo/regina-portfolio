import React from "react";
import styled from "styled-components";
import Animacao from '../../assets/LogoR.png';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Slide } from "react-awesome-reveal";

const ProfComponent = () => {
    return (
      <Container id="header">
        <Slide direction="left">
          <Texts>
            <h4>
              Hello World! Eu sou
            </h4>
            <h1 className="pink">Regina Pompeo</h1>
            <h3>Desenvolvedora Full Stack</h3>
            <p>
            Desvende o meu mundo criativo 
            e mergulhe na essência por trás das minhas criações.
            </p>
            <p>
            Estou pronto para compartilhar minha história com você.
            </p>
            <button>Vamos conversar</button>
            <Social>
              <p>Confira as minhas redes sociais</p>
              <div className="social-icons">
                <span>
                  <a href="/">
                    <FaGithub />
                  </a>
                </span>
                <span>
                  <a href="/">
                    <MdEmail />
                  </a>
                </span>
                <span>
                  <a href="/">
                    <FaLinkedinIn />
                  </a>
                </span>
              </div>
            </Social>
          </Texts>
       </Slide>
        <Slide direction="right">
          <Filter>
            <Img src={Animacao}
            />
          </Filter>
    </Slide>
      </Container>
    );
  };
  
  export default ProfComponent;

  const Container = styled.div`
  align-items: center;
  display: flex;
  width: 80%;
  height: 90vh;
  gap: 10rem;
`;
const Texts = styled.div`
  h4 {
    padding: 1rem 0;
    font-weight: 500;
    color: #D9D9D9;
    font-size: 30px;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
    color: #D9D9D9;
  }
  p {
    font-weight: 400;
    font-size: 1.2rem;
    color: #D9D9D9;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #D9D9D9;
    border: none;
    font-size: 1rem;
    color: #b33ec2;
    font-weight: 1000;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-weight: 500;
    font-size: 1rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.7rem;
      height: 2.5rem;
      background-color: #FD42C9;
      border-radius: 50%;
      position: relative;
      transition: transform 400ms ease-in-out;
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export const Filter = styled.div`
  filter: drop-shadow(0px 0px 15px #01be9570);
`;


const Img = styled.img`
  width: 25rem;
  height: 25rem;
  text-align: center;
  transition: transform 400ms ease-in-out;
  display: flex;
  @media (max-width: 790px) {
    width: 20rem;
    height: 20rem;
  }

  @media (max-width: 660px) {
    width: 18rem;
    height: 18rem;
    position: relative;
    bottom: -5px;
  }

  @media (max-width: 640px) {
    width: 100%;
    height: 100%;
    position: relative;
    bottom: -5px;
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
