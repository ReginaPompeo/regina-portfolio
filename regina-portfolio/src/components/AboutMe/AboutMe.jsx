import React from 'react';
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";

function AboutMe() {
  return (
    <Container id="aboutme">
      <Slide direction="up">
      <TextTitle>
        <h1>Sobre Mim</h1>
      </TextTitle>
      </Slide>
      <GroupInfo>
      <Slide direction="left">
        <Picture>
          <Img src="https://media.licdn.com/dms/image/D4D03AQGUP0jDWmgtkw/profile-displayphoto-shrink_800_800/0/1692648015671?e=1723680000&v=beta&t=kw80bf6uJd62gA9jc2G-44YtOrKs6pqW6nZhVFdZbx4" alt="Foto Regina Pompeo"/>
        </Picture>
        </Slide>
        <Slide direction="right">
        <Texts> 
          <AboutMeTitle>
            <h2>Quem é</h2>
            <h2 className="white">Regina Pompeo</h2>
            <h2>?</h2>
          </AboutMeTitle>
            <Paragraph>
              Aqui é uma entusiasta de tecnologia que adora um bom desafio. Formada em Análise e Desenvolvimento de Sistemas, estou sempre em busca de novos aprendizados e maneiras de aprimorar o que já sei. Nessa jornada tech, me apaixonei pelo desenvolvimento com React.js, C# .NET e Java Spring Boot.
            </Paragraph>
            <Paragraph>
              Falando de front-end, o React.js é meu queridinho. É um prazer trabalhar com ele e me sinto super à vontade tecendo códigos em JavaScript e TypeScript. Já no back-end, me divirto construindo sistemas robustos com Java e Spring Boot, além de mergulhar no universo do C# com .NET. Esses frameworks são meus parceiros na hora de criar soluções criativas e inovadoras.
            </Paragraph>
            <Paragraph>
              Mas não é só de código que vive uma dev! Adoro colocar minha criatividade em jogo e encarar desafios de ângulos diferentes. Meu compromisso é sempre entregar o melhor de mim, com o olho no crescimento e na evolução contínua.
            </Paragraph>
            <Paragraph>
              Seja dando vida a interfaces ou arquitetando o back-end, estou pronta para novas aventuras e ansiosa para somar em projetos e times. O futuro promete muitas oportunidades de desenvolvimento e aprendizado, e eu estou aqui, de malas prontas para fazer história no mundo da tecnologia.
            </Paragraph>    
        </Texts>
        </Slide>
      </GroupInfo>
    </Container>
  );
}

export default AboutMe;

const Container = styled.div`
  display: flex;
  width: 80%;
  height: 100vh;
  gap: 4rem;
  justify-content: center;
  flex-direction: column;
`;

const TextTitle = styled.div``;

const GroupInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10rem;
`;

const Picture = styled.div`
  margin-top: 1rem;
`;

const AboutMeTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  h2.white {
    color: #D9D9D9;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem; /* Espaçamento entre parágrafos */
  color: #D9D9D9; /* Cor do texto */
  width: 100%;
  word-wrap: break-word;
  white-space: pre-wrap;
  color: #D9D9D9;
  font-weight: 500;
  font-size: 1.2rem;
  text-align: justify;
`;

const Img = styled.img`
  width: 30rem;
  height: 36rem;
  object-fit: cover;
`;

const Texts = styled.div`
flex: 1;
`;