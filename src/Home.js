import React from "react";
import styled from "styled-components";
import PersonalDetails from "./components/personalDetails";
import Skills from "./components/skills";
import Experiences from "./components/experiences";
import Hobbies from "./components/Hobbies";
import Projects from "./components/projects";

const Home = () => {
  return (
    <Container>
      <PersonalDetailsContainer>
        <PersonalDetails />
      </PersonalDetailsContainer>
      <ExperiencesContainer>
        <Experiences />
      </ExperiencesContainer>
      <HobbiesContainer>
        <Hobbies />
      </HobbiesContainer>
      <SkillsContainer>
        <Skills />
      </SkillsContainer>
      <ProjectsContainer>
        <Projects />
      </ProjectsContainer>
    </Container>
  );
};

export default Home;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  padding: 30px;
  background-color: #eceaea;

  @media (max-width: 480px) {
    grid-template-columns: 100%;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    gap: 10px;
    padding: 20px;
  }
`;

export const PersonalDetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-color: #ffffff;
  grid-column: 1 / 2;
  grid-row: 1 / 4;

  @media (max-width: 480px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`;

export const ExperiencesContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-color: #ffffff;
  grid-column: 1 / 2;
  grid-row: 4 / 5;

  @media (max-width: 480px) {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
`;

export const HobbiesContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-color: #ffffff;
  grid-column: 1 / 2;
  grid-row: 5 / 6;

  @media (max-width: 480px) {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
  }
`;

export const SkillsContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 2 / 4;
  grid-row: 1 / 2;

  @media (max-width: 480px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
`;

export const ProjectsContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  grid-column: 2 / 4;
  grid-row: 2 / 7;

  @media (max-width: 480px) {
    grid-column: 1 / 2;
    grid-row: 5 / 6;
  }
`;
