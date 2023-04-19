import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Nav/NavBar";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const AboutTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-align: center;
  color: #333;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 30px;
  line-height: 1.5;
`;

const Content = styled.div`
  flex: 1 0 auto;
  max-width: 800px;
  margin: 0 auto;
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

const Link = styled.a`
  color: #0077cc;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
const About = () => {
  return (
    <div>
      <NavBar />

      <AboutContainer>
        <Content>
          <AboutTitle>About Me</AboutTitle>
          <AboutText>
            Hi there! My name is Pedro Gontijo, and I'm a passionate frontend
            developer originally from Brazil, currently living in Canada and
            studying web development.
          </AboutText>
          <AboutText>
            I first started teaching myself how to code back in 2019, and I
            quickly found myself drawn to the world of web development. I
            started out by learning HTML and JavaScript, and I quickly fell in
            love with the process of building websites and web applications.
          </AboutText>
          <AboutText>
            Over time, I've continued to build on my skills and expand my
            knowledge of web development. These days, I'm mainly focused on
            developing interfaces using ReactJS and NodeJS, and I'm always
            looking for new and exciting projects to work on.
          </AboutText>
          <AboutText>
            One of my most recent projects was building a news aggregator using
            the NewsAPI and Redux. I had a lot of fun working on this project,
            and I learned a lot about how to build scalable web applications
            using React and Redux.
          </AboutText>
          <AboutText>
            Thanks for taking the time to learn a little bit more about me and
            my work! If you'd like to get in touch, feel free to reach out to me
            on LinkedIn or via email. I'm always happy to connect with other
            developers and discuss new and exciting projects.
          </AboutText>
        </Content>
      </AboutContainer>
      <Footer />
    </div>
  );
};

export default About;
