import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx';
import AboutMe from './components/about-me.jsx';
import './App.css';

function App() {
  return (
<Router>
      <div className="app-container">
        <Header />
        <AboutMe />
      </div>
    </Router>
  );
}

export default App;
