import React from 'react';

function AboutMe() {
  const aboutmeStyle = {
    backgroundImage: 'linear-gradient(to right,#63D0FF, #B089E4, #FD42C9)',
    backgroundSize: 'cover',
    height: '100vh', 
    width: '100%', 
    padding: '4rem',
  };

  return (
    <div style={aboutmeStyle}>
      <h1>Sobre Mim</h1>
      <p>Aqui você pode escrever um pouco sobre você.</p>
    </div>
  );
}

export default AboutMe;
