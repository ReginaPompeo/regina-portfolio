import styled from "styled-components";
import FundoHome from './assets/Fundo.gif';
import Header from './components/Nav/Header';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import './App.css';

function App() {
  return (
    <Container>
      <Apresentation>
        <Header />
        <Home /> 
      </Apresentation>
      <LinearGradient>
        <AboutMe/>
      </LinearGradient>
    </Container>
  );
}

export default App;

const Container = styled.div`
  `;

const Apresentation = styled.div`
  display: flex;
  gap: 2rem;
  padding: 3rem 5rem;
  width: 100%;
  height: 80vh;
  margin: 0 auto;
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
        backgroundImage: 'linear-gradient(to right,#63D0FF, #B089E4, #FD42C9)',
    backgroundSize: 'cover',
    height: '100vh', 
    width: '100%', 
    padding: '4rem',`
