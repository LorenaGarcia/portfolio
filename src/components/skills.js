import React from "react";
import styled from "styled-components";

const Skill = () => {
  return (
    <Container>
      <DivContainer>
        <Name>Front-End</Name>
        <Progress>
          Javascript
          <progress className="progress-bar" max="100" value="80" />
        </Progress>
        <Progress>
          React
          <progress className="progress-bar" max="100" value="80" />
        </Progress>
        <Progress>
          Redux
          <progress className="progress-bar" max="100" value="70" />
        </Progress>
        <Progress>
          Next.js
          <progress className="progress-bar" max="100" value="50" />
        </Progress>
        <Progress>
          React Native
          <progress className="progress-bar" max="100" value="60" />
        </Progress>
        <Progress>
          CSS
          <progress className="progress-bar" max="100" value="80" />
        </Progress>

        <Progress>
          HTML
          <progress className="progress-bar" max="100" value="90" />
        </Progress>
      </DivContainer>
      <DivContainer className="margin">
        <Name>Back-End</Name>
        <Progress>
          PHP
          <progress className="progress-bar" max="100" value="70" />
        </Progress>
        <Progress>
          Laravel
          <progress className="progress-bar" max="100" value="60" />
        </Progress>
        <Progress>
          Zend
          <progress className="progress-bar" max="100" value="55" />
        </Progress>
        <Progress>
          Python
          <progress className="progress-bar" max="100" value="50" />
        </Progress>
      </DivContainer>
    </Container>
  );
};

export default Skill;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 480px) {
    flex-direction: column;
  }

  .margin {
    @media (min-width: 481px) and (max-width: 950px) {
      margin-left: 0.5rem;
    }
  }
`;

export const DivContainer = styled.div`
  width: 43%;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 20px;

  @media (max-width: 480px) {
    width: 90%;
    margin-bottom: 30px;
  }
`;

export const Progress = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;

  .progress-bar {
    width: 60%;
  }
`;

export const Name = styled.p`
  color: #4f4f4f;
  font-size: 24px;
  margin-bottom: 0px;
  margin-bottom: 30px;
  font-weight: bold;
  text-align: center;
`;
