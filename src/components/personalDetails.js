import React from "react";
import styled from "styled-components";
import image from "../images/photo.jpg";

const Details = () => {
  return (
    <Container>
      <DivContainer>
        <Image src={image} />
      </DivContainer>
      <DivContainer>
        <Name>Lorena Garcia Reyes</Name>
        <Profession>Front-end developer</Profession>
        <Contact>
          <span className="material-icons">email</span>{" "}
          lorenagarciar34@gmail.com
        </Contact>
        <Contact>
          <span className="material-icons">language</span>
          https://github.com/LorenaGarcia
        </Contact>
      </DivContainer>
    </Container>
  );
};

export default Details;

export const Container = styled.div`
  width: 100%;
  margin-bottom: 5rem;
`;

export const DivContainer = styled.div`
  padding: 20px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 15px;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  font-size: 18px;
  color: #4f4f4f;
  margin-bottom: 10px;
`;

export const Name = styled.p`
  color: #4f4f4f;
  font-size: 24px;
  margin-bottom: 0px;
  margin-top: 0px;
`;

export const Profession = styled.p`
  color: #828282;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 20px;
`;
