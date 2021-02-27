import React from "react";
import styled from "styled-components";
import cooking from "../images/cooking.jpg";
import drawing from "../images/drawing.jpeg";

const Hobbies = () => {
  return (
    <Container>
      <DivContainer>
        <Title>Hobbies</Title>
        <Company>
          <div>
            <Job>Drawing</Job>
          </div>
          <div>
            <Image src={drawing} />
          </div>
        </Company>
        <Company>
          <div>
            <Job>Cooking</Job>
          </div>
          <div>
            <Image src={cooking} />
          </div>
        </Company>
      </DivContainer>
    </Container>
  );
};

export default Hobbies;

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
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 15px;
  padding: 20px;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 15px;
  object-fit: cover;
  display: block;
`;

export const Job = styled.p`
  font-size: 18px;
  font-weight: bold;
  line-height: 20px;
  color: #333333;
`;
