import React, { useEffect } from "react";
import styled from "styled-components";
import mygalery from "../images/my-galery.png";
import interior from "../images/interior.png";
import homepage from "../images/homepage.png";
import checkout from "../images/checkout.png";
import recipe from "../images/recipe.png";
import team from "../images/team.png";
import notfound from "../images/notfound.png";
import tracker from "../images/tracker.png";
import buttons from "../images/button-component.png";

const Projects = () => {
  useEffect(() => {
    filterProjects("all");
  });

  const filterProjects = (name) => {
    var x, i;
    x = document.getElementsByClassName("project");

    if (name === "all") name = "";
    for (i = 0; i < x.length; i++) {
      removeClass(x[i], "show");
      if (x[i].className.indexOf(name) > -1) {
        addClass(x[i], "show");
      }
    }
  };

  const addClass = (element, name) => {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) === -1) {
        element.className += " " + arr2[i];
      }
    }
  };

  const removeClass = (element, name) => {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  };

  return (
    <ContainerMain>
      <DivContainer>
        <Container>
          <Title>
            Projects
            <ButtonHash onClick={() => filterProjects("all")}>
              Show All
            </ButtonHash>
            <ButtonHash onClick={() => filterProjects("html")}>
              #HTML
            </ButtonHash>
            <ButtonHash onClick={() => filterProjects("css")}>#CSS</ButtonHash>{" "}
            <ButtonHash onClick={() => filterProjects("react")}>
              #React
            </ButtonHash>
            <ButtonHash onClick={() => filterProjects("styled")}>
              #styled-components
            </ButtonHash>
            <ButtonHash onClick={() => filterProjects("context")}>
              #context
            </ButtonHash>
          </Title>
        </Container>

        <Container className="project react context">
          <div>
            <Image src={tracker} />
          </div>
          <ContainerText>
            <Hash>#React #context</Hash>
            <TitleExample>Example / Expense Tracker</TitleExample>
            <Description>Web site created using React context</Description>
            <div>
              <a
                href="https://lorenagarcia.github.io/expense-tracker-react/"
                rel="noreferrer"
                target="_blank"
              >
                <ButtonDemo>Demo</ButtonDemo>
              </a>
              <a
                href="https://github.com/LorenaGarcia/expense-tracker-react"
                rel="noreferrer"
                target="_blank"
              >
                <ButtonCode>Code</ButtonCode>
              </a>
            </div>
          </ContainerText>
        </Container>

        <Container className="project html react styled css">
          <div>
            <Image src={interior} />
          </div>
          <ContainerText>
            <Hash>#HTML #CSS #React #styled-components</Hash>
            <TitleExample>Example / Interior Consultant</TitleExample>
            <Description>Web site created using React</Description>
            <div>
              <a
                href="https://lorenagarcia.github.io/interior-consultant/"
                rel="noreferrer"
                target="_blank"
              >
                <ButtonDemo>Demo</ButtonDemo>
              </a>
              <a
                href="https://github.com/LorenaGarcia/interior-consultant"
                rel="noreferrer"
                target="_blank"
              >
                <ButtonCode>Code</ButtonCode>
              </a>
            </div>
          </ContainerText>
        </Container>

        <Container className="project html react styled css">
          <div>
            <Image src={mygalery} />
          </div>
          <ContainerText>
            <Hash>#HTML #CSS #React #styled-components</Hash>
            <TitleExample>Example / My Gallery</TitleExample>
            <Description>Web site created using React</Description>
            <div>
              <a
                href="https://lorenagarcia.github.io/my-gallery/"
                rel="noreferrer"
                target="_blank"
              >
                <ButtonDemo>Demo</ButtonDemo>
              </a>
              <a
                href="https://github.com/LorenaGarcia/my-gallery"
                rel="noreferrer"
                target="_blank"
              >
                <ButtonCode>Code</ButtonCode>
              </a>
            </div>
          </ContainerText>
        </Container>

        <Container className="project html react styled css">
          <div>
            <Image src={homepage} />
          </div>
          <ContainerText>
            <Hash>#HTML #CSS #React #styled-components</Hash>
            <TitleExample>Example / Homepage</TitleExample>
            <Description>Web site created using React</Description>
            <div>
              <a
                href="https://lorenagarcia.github.io/edie-homepage/"
                rel="noreferrer"
                target="_blank"
              >
                <ButtonDemo>Demo</ButtonDemo>
              </a>
              <a
                href="https://github.com/LorenaGarcia/edie-homepage"
                rel="noreferrer"
                target="_blank"
              >
                <ButtonCode>Code</ButtonCode>
              </a>
            </div>
          </ContainerText>
        </Container>

        <Container className="project html react styled css">
          <div>
            <Image src={checkout} />
          </div>
          <ContainerText>
            <Hash>#HTML #CSS #React #styled-components</Hash>
            <TitleExample>Example / Checkout Page</TitleExample>
            <Description>Web site created using React</Description>
            <div>
              <a
                href="https://lorenagarcia.github.io/checkout-page/"
                rel="noreferrer"
                target="_blank"
              >
                <ButtonDemo>Demo</ButtonDemo>
              </a>
              <a
                href="https://github.com/LorenaGarcia/checkout-page"
                rel="noreferrer"
                target="_blank"
              >
                <ButtonCode>Code</ButtonCode>
              </a>
            </div>
          </ContainerText>
        </Container>

        <Container className="project html react styled css">
          <div>
            <Image src={recipe} />
          </div>
          <ContainerText>
            <Hash>#HTML #CSS #React #styled-components</Hash>
            <TitleExample>Example / Recipe Page</TitleExample>
            <Description>Web site created using React</Description>
            <div>
              <a
                href="https://lorenagarcia.github.io/recipe-page/"
                rel="noreferrer"
                target="_blank"
              >
                <ButtonDemo>Demo</ButtonDemo>
              </a>
              <a
                href="https://github.com/LorenaGarcia/recipe-page"
                rel="noreferrer"
                target="_blank"
              >
                <ButtonCode>Code</ButtonCode>
              </a>
            </div>
          </ContainerText>
        </Container>

        <Container className="project html react styled css">
          <div>
            <Image src={team} />
          </div>
          <ContainerText>
            <Hash>#HTML #CSS #React #styled-components</Hash>
            <TitleExample>Example / My Team Page</TitleExample>
            <Description>Web site created using React</Description>
            <div>
              <a
                href="https://lorenagarcia.github.io/my-team-page/"
                rel="noreferrer"
                target="_blank"
              >
                <ButtonDemo>Demo</ButtonDemo>
              </a>
              <a
                href="https://github.com/LorenaGarcia/my-team-page"
                rel="noreferrer"
                target="_blank"
              >
                <ButtonCode>Code</ButtonCode>
              </a>
            </div>
          </ContainerText>
        </Container>

        <Container className="project html css">
          <div>
            <Image src={notfound} />
          </div>
          <ContainerText>
            <Hash>#HTML #CSS </Hash>
            <TitleExample>Example / 404 Not Found</TitleExample>
            <Description>Web site created using React</Description>
            <div>
              <a
                href="https://lorenagarcia.github.io/404-not-found/"
                rel="noreferrer"
                target="_blank"
              >
                <ButtonDemo>Demo</ButtonDemo>
              </a>
              <a
                href="https://github.com/LorenaGarcia/404-not-found"
                rel="noreferrer"
                target="_blank"
              >
                <ButtonCode>Code</ButtonCode>
              </a>
            </div>
          </ContainerText>
        </Container>

        <Container className="project html css">
          <div>
            <Image
              src={
                "https://raw.githubusercontent.com/LorenaGarcia/input-component/master/public/imageHome.jpg"
              }
            />
          </div>
          <ContainerText>
            <Hash>#HTML #CSS #React </Hash>
            <TitleExample>Example / Input Component</TitleExample>
            <Description>Web site created using React</Description>
            <div>
              <a
                href="https://lorenagarcia.github.io/input-component/"
                rel="noreferrer"
                target="_blank"
              >
                <ButtonDemo>Demo</ButtonDemo>
              </a>
              <a
                href="https://github.com/LorenaGarcia/input-component"
                rel="noreferrer"
                target="_blank"
              >
                <ButtonCode>Code</ButtonCode>
              </a>
            </div>
          </ContainerText>
        </Container>

        <Container className="project html css">
          <div>
            <Image src={buttons} />
          </div>
          <ContainerText>
            <Hash>#HTML #CSS #React </Hash>
            <TitleExample>Example / Button Component</TitleExample>
            <Description>Web site created using React</Description>
            <div>
              <a
                href="https://lorenagarcia.github.io/button-component/"
                rel="noreferrer"
                target="_blank"
              >
                <ButtonDemo>Demo</ButtonDemo>
              </a>
              <a
                href="https://github.com/LorenaGarcia/button-component"
                rel="noreferrer"
                target="_blank"
              >
                <ButtonCode>Code</ButtonCode>
              </a>
            </div>
          </ContainerText>
        </Container>
      </DivContainer>
    </ContainerMain>
  );
};

export default Projects;

export const ContainerMain = styled.div`
  width: 100%;

  .project {
    display: none;
  }

  .show {
    display: flex;
  }
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
`;

export const Hash = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: #4f4f4f;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  margin-bottom: 15px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 15px;

  @media (max-width: 480px) {
    width: 90%;
    flex-direction: column;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 400px;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 10px;

  @media (max-width: 480px) {
    width: 100%;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    width: 100%;
  }

  @media (min-width: 2500px) and (max-width: 6000px) {
    width: 100%;
    max-width: 55rem;
  } ;
`;

export const TitleExample = styled.p`
  font-size: 24px;
  line-height: 29px;
  color: #333333;
  margin-bottom: 5px;
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #828282;
  margin-top: 0px;
  margin-bottom: 30px;
`;

export const ContainerText = styled.div`
  margin-left: 5rem;

  @media (max-width: 480px) {
    margin-left: 0px;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    margin-left: 0px;
  }
`;

export const ButtonDemo = styled.button`
  width: 7rem;
  height: 2rem;
  border-radius: 5px;
  margin-right: 20px;
  background-color: #087985;
  color: #ffffff;
  font-size: 18px;
  border: 1px solid #087985;
  cursor: pointer;
`;

export const ButtonCode = styled.button`
  width: 7rem;
  height: 2rem;
  border-radius: 5px;
  background-color: #ffffff;
  color: #087985;
  font-size: 18px;
  border: 1px solid #087985;
  cursor: pointer;
`;

export const ButtonHash = styled.button`
  height: 2rem;
  border-radius: 5px;
  background-color: #ffffff;
  color: #087985;
  font-size: 18px;
  border: 1px solid #087985;
  cursor: pointer;
  margin-right: 10px;
  margin-left: 10px;
`;
