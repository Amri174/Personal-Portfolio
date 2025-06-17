import { Container, Tab, Nav } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import { ProjectCard } from "./ProjectCard";
// import projimg1 from "../assets/img/projectimg1.jfif";
import projimg2 from "../assets/img/projectimg2.PNG";
import projimg3 from "../assets/img/projectimg3.png";
import projimg4 from "../assets/img/projectimg4.PNG";
import projimg5 from "../assets/img/projectimg5-2.png";
import projimg6 from "../assets/img/projectimg6.PNG";
import projimg7 from "../assets/img/projectimg7-1.png";
import projimg8 from "../assets/img/projectimg8-1.PNG";
import projimg9 from "../assets/img/projectimg9-1.jpg";
import projimg10 from "../assets/img/certimg1.png";
import projimg11 from "../assets/img/certimg2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const Projects = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const projects = [
    // {
    //   title: "ArtSuite Website",
    //   description: "Currently Developing",
    //   imgUrl: projimg1,
    // },
    {
      title: "PowerBI Dashboard",
      description: "Developed a dynamic Car Sales Visualization Dashboard with KPIs for actionable insights.",
      imgUrl: projimg2,
      projectUrl: "https://github.com/Amri174/PowerBI",
      linkText: "Link",
    },
    {
      title: "Data Analytics Essentials - Certificate",
      description: "Achieved from Cisco Networking Academy. Learned practical data techniques using Excel, SQL and Tebleau.",
      imgUrl: projimg10,
      projectUrl: "https://drive.google.com/file/d/1OBYGbni3X4toLxjEEXTdlDdWoWVxDAVz/view?usp=sharing",
      linkText: "Certificate",
    },
    {
      title: "Low Code Platform",
      description: "Designed Art Gallery managemnet application with seamless MySQL integration for effecient artwork catloging.",
      imgUrl: projimg3,
      projectUrl: "https://github.com/Amri174/LowCode-Application",
      linkText: "Link",
    },
    {
      title: "Machine Learning Project",
      description: "Developed a real-time Phishing URL detection System for WhatsApp. Used Bussiness API to detect and flag phishing URLs enhancing security.",
      imgUrl: projimg5,
      projectUrl: "https://drive.google.com/file/d/1pEcYqx6MWWeiyDHI7M-trFkHRvMHyVcl/view?usp=sharing",
      linkText: "Report",
    },
    {
      title: "Machine Learning Internship",
      description: "Applied Machine Learning Skills during internship at 4i Apps Solutions, Chennai. Worked on hyperparameter tuning and model optimization leveraging python libraries.",
      imgUrl: projimg4,
      projectUrl: "https://github.com/Amri174/Python_ML",
      linkText: "Link",
    },
    {
      title: "Collaborative Machine Learning Project",
      description: "Identified critical life-related features contributing to Depression using ML Algorithms and delivered insights for potential early detection.",
      imgUrl: projimg6,
      projectUrl: "https://drive.google.com/file/d/1-yJGKBXyznxfb_9Y7HL0CWf2zNjdaUVL/view?usp=sharing",
      linkText: "Report",
    },
    {
      title: "Ethical Hacking - Certified",
      description: "Achieved from NPTEL Platform",
      imgUrl: projimg11,
      projectUrl: "https://drive.google.com/file/d/1IYgtduhg3coWeMLo3a-6wBGlRYowTLdx/view?usp=sharing",
      linkText: "Certificate",
    },
    {
      title: "Django",
      description: "Deployed scalable application using Python and Django framework.",
      imgUrl: projimg8,
      projectUrl: "",
      linkText: "",
    },
    {
      title: "UML Schema",
      description: "Designed detailed schemas using StarUML supporting Object Oriented Analysis (OOA).",
      imgUrl: projimg9,
      projectUrl: "https://github.com/Amri174/GrievanceManagement-UML",
      linkText: "Link",
    },
    {
      title: "Java GUI",
      description: "Designed user intefraces by implementing Abstract Window Toolkit (AWT) and Java Swing Componenets for enhanced usability.",
      imgUrl: projimg7,
      projectUrl: "https://github.com/Amri174/Airlines-GUI",
      linkText: "Link",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
          <br></br><br></br>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Activities</h2>
                <br></br>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Professional</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Extracurricular Activities</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme project-slider">
                        {projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Carousel>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div className="timeline-container">
                        <ul class="timeline">

                          <li>
                            <div class="direction-r">
                              <div class="flag-wrapper">
                                <span class="hexa"></span>
                                <span class="flag">Marketing Team</span>
                                <span class="time-wrapper"><span class="time">Feb 2021</span></span>
                              </div>
                              <div class="desc">Identified potential contact and negotiated for sponsor acquisition </div>
                            </div>
                          </li>

                          <li>
                            <div class="direction-l">
                              <div class="flag-wrapper">
                                <span class="hexa"></span>
                                <span class="flag">Public Realtions</span>
                                <span class="time-wrapper"><span class="time">Apr 2023</span></span>
                              </div>
                              <div class="desc">Pitched and promoted club events </div>
                            </div>
                          </li>

                          <li>
                            <div class="direction-r">
                              <div class="flag-wrapper">
                                <span class="hexa"></span>
                                <span class="flag">Arts Club (TAG)</span>
                                <span class="time-wrapper"><span class="time">Sept 2023</span></span>
                              </div>
                              <div class="desc">Collaborated to create theme-based artworks</div>
                            </div>
                          </li>

                          <li>
                            <div class="direction-l">
                              <div class="flag-wrapper">
                                <span class="hexa"></span>
                                <span class="flag">CSI</span>
                                <span class="time-wrapper"><span class="time">Jan 2024</span></span>
                              </div>
                              <div class="desc">Volunteered and Contributed Local Student Chapters and Tech meets </div>
                            </div>
                          </li>

                          <li>
                            <div class="direction-r">
                              <div class="flag-wrapper">
                                <span class="hexa"></span>
                                <span class="flag">Web3</span>
                                <span class="time-wrapper"><span class="time">Mar 2025</span></span>
                              </div>
                              <div class="desc">Head of Events and Promotions Cluster</div>
                            </div>
                          </li>
                          
                        </ul>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
      </Container>
    </section>
  )
}
