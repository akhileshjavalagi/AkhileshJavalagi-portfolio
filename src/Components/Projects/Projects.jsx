import React from "react";
import { FaGithub, FaLink, FaNodeJs } from "react-icons/fa";
import {
  ProjectDiv,
  Row,
  ServiceBox,
  ServiceBoxHeader,
  ServiceBoxP,
  A,
  BoxDiv,
} from "./Styles";
import { Container, Common, H1 } from "../../SharedStyles/SharedStyles";
import { FaHtml5, FaReact, FaJs, FaCss3 } from "react-icons/fa";
import { SiMongodb, SiRedux } from "react-icons/si";
const Projects = () => {
  const projects = [
    // {
    //   id: 0,
    //   project_name: "MaskIt Store",
    //   image: "/project_images/maskit.png",
    //   project_desc:
    //     "MaskIt Store is an E-commerce web app that allows users to search, buy and review masks.",
    //   deploy_link: "https://maskit.vercel.app/",
    //   repo_link: "https://github.com/ajmalmiyan/maskit-store",
    //   tech_stack: [
    //     <FaReact />,
    //     <FaNodeJs />,
    //     <SiMongodb />,
    //     <SiRedux />,
    //     <FaJs />,
    //     <FaCss3 />,
    //   ],
    // },
    // {
    //   id: 1,
    //   project_name: "Indeed Clone",
    //   image: "/project_images/indeed.png",
    //   project_desc:
    //     "Indeed is a web app that allows users to search jobs, apply jobs and add reviews about employers.",
    //   deploy_link: "https://indeed.vercel.app/",
    //   repo_link: "https://github.com/ajmalmiyan/indeed-clone",
    //   tech_stack: [<FaReact />, <SiRedux />, <FaJs />, <FaHtml5 />, <FaCss3 />],
    // },
    {
      id: 2,
      project_name: "Deset Cart Clone",
      image: "/project_images/cultfit.png",
      project_desc:
        "A web application to purchase the products which you need. Sorting and filtering functionality Coupon code application Wish list feature Features. Safe and fast delivery service.",
      deploy_link: "https://epic-cray-c4f186.netlify.app/",
      repo_link: "https://github.com/akhileshjavalagi/desert-cart-clone",
      tech_stack: [
        <FaJs />,
        <FaHtml5 />,
        <FaCss3 />,
      ],
    },
    // {
    //   id: 2,
    //   project_name: "Netflix Clone",
    //   image: "/project_images/netflix.png",
    //   project_desc:
    //     "An OTT platform that allows users to watch a wide variety of shows and movies. This is a personal project.",
    //   deploy_link: "https://netflix-psi-murex.vercel.app/",
    //   repo_link: "https://github.com/ajmalmiyan/netflix",
    //   tech_stack: [<FaReact />, <FaJs />, <FaHtml5 />, <FaCss3 />],
    // },
    //
    {
      id: 4,
      project_name: "Fab India Clone",
      image: "/project_images/Seekho.png",
      project_desc:
        "An e-commerce website to purchase different products online. Features: Multiple payment options Dynamic shopping cart User friendly. Built authentication and integrated it with the frontend.",
      deploy_link: "https://nervous-mayer-9a5cb0.netlify.app/",
      repo_link: "https://github.com/akhileshjavalagi/FabIndia-",
      tech_stack: [
        <SiMongodb />,
        <FaNodeJs />,
        <FaHtml5 />,
        <FaCss3 />,
        <FaJs />,
      ],
    },
    // {
    //   id: 3,
    //   project_name: "GROWW Clone",
    //   image: "/project_images/GROWW.png",
    //   project_desc:
    //     "An online stocks trading web app. Built using JS, Express js, Node js and MongoDB.",
    //   deploy_link: "https://growww-clone.netlify.app/",
    //   repo_link: "https://github.com/Vishal-080/Groww_Clone",
    //   tech_stack: [
    //     <FaHtml5 />,
    //     <FaCss3 />,
    //     <FaJs />,
    //     <FaNodeJs />,
    //     <SiMongodb />,
    //     <FaNodeJs />,
    //   ],
    // },
    // {
    //   id: 5,
    //   project_name: "Bluemercury Clone",
    //   image: "/project_images/bluemercury.png",
    //   project_desc:
    //     "Bluemercury is an US based Cosmetics store. Built using HTML, CSS and JavaScript. ",
    //   deploy_link: "https://bluemercuryclone.netlify.app/",
    //   repo_link: "https://github.com/Vishal-080/Bluemercury",
    //   tech_stack: [<FaHtml5 />, <FaCss3 />, <FaJs />],
    // },

    //https://seekho-frontend-vcow10kar.vercel.app/
  ];

  return (
    <Container className="projects">
      <ProjectDiv>
        <Common>
          <H1>Projects</H1>
        </Common>
        <Row>
          {projects.map((item) => (
            <BoxDiv key={item.id}>
              <ServiceBox>
                <img src={item.image} alt="icon" style={{ width: "100%" }} />
                <div style={{ margin: "15px" }}>
                  <ServiceBoxHeader style={{ textAlign: "center" }}>
                    {item.project_name}
                  </ServiceBoxHeader>
                  <ServiceBoxP>{item.project_desc}</ServiceBoxP>
                  {/* <a href="">Read more</a> */}
                  <div
                    style={{
                      margin: "15px 20px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {item.tech_stack.map((item) => (
                      <div className="iconsTechStack">{item}</div>
                    ))}
                  </div>
                  <A
                    href={item.repo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> Code
                  </A>
                  <A
                    href={item.deploy_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLink /> Demo
                  </A>
                </div>
              </ServiceBox>
            </BoxDiv>
          ))}
        </Row>
      </ProjectDiv>
    </Container>
  );
};

export default Projects;
