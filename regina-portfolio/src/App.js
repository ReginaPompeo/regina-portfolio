import styled from "styled-components";
import FundoHome from './assets/Fundo.gif';
import FundoProjects from './assets/BackgroundProjects.jpg';
import Header from './components/Nav/Header';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import './App.css';

function App() {
  return (
    <Container>
      <Apresentation>
        <Header/>
        <Home/> 
      </Apresentation>
      <LinearGradient>
        <AboutMe/>
      </LinearGradient>
      <PageProjects>
        <Projects/>
      </PageProjects>
    </Container>
  );
}

export default App;

const Container = styled.div`
  `;

const Apresentation = styled.div`
  display: flex;
  padding: 3rem 5rem;
  width: auto;
  height: 90vh;
  z-index: 1;
  background-image: url(${FundoHome});
  background-size: cover;
  align-items: center;
  flex-direction: column;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const LinearGradient = styled.div`
  display: flex;
  padding: 3rem 5rem;
  width: auto;
  height: 100vh;
  z-index: 1;
  background-image: linear-gradient(to right, #63D0FF, #B089E4, #FD42C9);
  background-size: cover;
  align-items: center;
  flex-direction: column;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const PageProjects = styled.div`
  display: flex;
  padding: 3rem 5rem;
  width: auto;
  height: 100vh;
  z-index: 1;
  background-image: url(${FundoProjects});
  background-size: cover;
  align-items: center;
  flex-direction: column;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;