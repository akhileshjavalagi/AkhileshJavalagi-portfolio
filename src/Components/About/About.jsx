import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import {
  AboutDiv,
  Column,
  Img,
  AboutInfo,
  AboutInfoP,
  HeaderUl,
  HeaderLi,
  JelloHori,
} from "./Styles";

import { Container, H1 } from "../../SharedStyles/SharedStyles";
const socialMediaLinks = [
  {
    id: 0,
    link: "https://www.linkedin.com/in/akhilesh-javalagi-bb3a891bb/",
    icon: <FaLinkedin />,
  },
  {
    id: 1,
    link: "https://github.com/akhileshjavalagi",
    icon: <FaGithub />,
  },
  {
    id: 2,
    link: "https://twitter.com/akhileshjavala6",
    icon: <FaTwitter />,
  },
];
const About = () => {
  return (
    <Container className="about">
      <br />
      <AboutDiv>
        <Column>
          <Img src="/images/vishalT.webp" alt="my image" />
        </Column>
        <Column>
          <H1>About Me</H1>
          <AboutInfo>
            <AboutInfoP>
            Logical and results-driven full stack developer. Dedicated to 
            building and optimizing user- focused websites and applications, 
            judicious and creative when crafting effective websites, and platforms 
            to propel competitive advantage and revenue growth. Technically proficient 
            and analytical problem solver with a calm and focused demeanor.
            </AboutInfoP>
            <AboutInfoP>
              I am adaptable, proficient in remote collaboration, and committed
              to achieving organizational goals. With a knack for
              problem-solving and analytics, I am passionate about solving
              Algorithmic problems with a good hold on Data Structures.
            </AboutInfoP>
          </AboutInfo>
          <HeaderUl>
            {socialMediaLinks.map((item) => (
              <JelloHori key={item.id}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <HeaderLi>{item.icon}</HeaderLi>
                </a>
              </JelloHori>
            ))}
          </HeaderUl>
        </Column>
      </AboutDiv>
      <br />
    </Container>
  );
};

export default About;
