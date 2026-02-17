"use client";
import React from "react";
import * as Styled from "./skills.styles";

const Skills = () => {
  const skillsList = [
    "JavaScript (ES6+)",
    "React.js",
    "Redux / Context API",
    "Next.js",
    "React Native",
    "TypeScript",
    "Tailwind CSS",
    "HTML5 / CSS3",
    "Node.js",
    "PHP",
    "Laravel",
    "Zend Framework",
    "Python",
    "PostgreSQL",
    "REST APIs",
    "AWS",
  ];

  return (
    <Styled.Container>
      <Styled.MainHeader>
        <Styled.IconBox>
          <span className="material-icons">bolt</span>
        </Styled.IconBox>
        <Styled.MainTitle>Technical Toolkit</Styled.MainTitle>
      </Styled.MainHeader>

      <Styled.DivContainer>
        <Styled.SubHeader>
          <span className="material-icons">psychology</span>
          <Styled.Name>Skills</Styled.Name>
        </Styled.SubHeader>

        <Styled.SkillsWrapper>
          {skillsList.map((skill, index) => (
            <Styled.SkillTag key={index}>{skill}</Styled.SkillTag>
          ))}
        </Styled.SkillsWrapper>
      </Styled.DivContainer>
    </Styled.Container>
  );
};

export { Skills };
