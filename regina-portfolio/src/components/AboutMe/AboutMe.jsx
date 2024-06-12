import React from 'react';
import styled from "styled-components";

function AboutMe() {
  return (
    <Container id="aboutme">
      <TextTitle>
        <h1>Sobre Mim</h1>
      </TextTitle>
      <GroupInfo>
        <Picture>
          <Img src="https://media.licdn.com/dms/image/D4D03AQGUP0jDWmgtkw/profile-displayphoto-shrink_800_800/0/1692648015671?e=1723680000&v=beta&t=kw80bf6uJd62gA9jc2G-44YtOrKs6pqW6nZhVFdZbx4" alt="Foto Regina Pompeo"/>
        </Picture>
        <Texts>       
          <p>Quem é Regina Pompeo?</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </Texts>
      </GroupInfo>
    </Container>
  );
}

export default AboutMe;

const Container = styled.div`
  padding: 3rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 90vh;
`;

const TextTitle = styled.div``;

const GroupInfo = styled.div`
  flex-direction: row;
  `;

const Picture = styled.div`
  margin-top: 1rem;
  flex-shrink: 0;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  flex: 1;
  p {
    margin: 0.5rem 0;
  }
`;