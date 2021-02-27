import React from "react";
import styled from "styled-components";
import commonsense from "../images/commonsense.png";
import clickbus from "../images/clickbus.png";
import element from "../images/element.jpeg";

const Experience = () => {
  return (
    <Container>
      <DivContainer>
        <Title>Experiences</Title>
        <Company>
          <div>
            <Image src={commonsense} />
          </div>
          <div>
            <Date>February 2017 - Current</Date>
            <Job>Webdeveloper Front-End</Job>
          </div>
        </Company>
        <Company>
          <div>
            <Image src={clickbus} />
          </div>
          <div>
            <Date>August 2019 - March 2020</Date>
            <Job>Webdeveloper Front-End</Job>
          </div>
        </Company>
        <Company>
          <div>
            <Image src={element} />
          </div>
          <div>
            <Date>January 2017 - August 2019</Date>
            <Job>Webdeveloper Back-End</Job>
          </div>
        </Company>
      </DivContainer>
    </Container>
  );
};

export default Experience;

export const Container = styled.div`
  width: 100%;
`;

export const DivContainer = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

export const Title = styled.p`
  color: #4f4f4f;
  font-size: 24px;
  margin-bottom: 0px;
  margin-bottom: 30px;
  font-weight: bold;
  margin: 0px;
  padding: 20px;
`;

export const Company = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 15px;
  padding: 20px;
`;

export const Image = styled.img`
  width: 5rem;
  height: auto;
  object-fit: cover;
  display: block;
`;

export const Date = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #828282;
`;

export const Job = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: #333333;
`;
