import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/moonglowp2.png";
import GitHubIcon from "../assets/img/icons/GitHub.png";
import LinkedinIcon from "../assets/img/icons/linkedin.png";
import GmailIcon from "../assets/img/icons/gmail.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Development", "Data Analytics", "Machine Learning" ];
  const period = 2000;


  useEffect(() => {

    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    };


    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta, isDeleting, loopNum, toRotate])


  return (
    <section>
    <section className="banner background-effect" id="home">
    <div class="animation-wrapper">
      <div class="particle particle-1"></div>
      <div class="particle particle-2"></div>
      <div class="particle particle-3"></div>
      <div class="particle particle-4"></div>
    </div>
      <Container>
        <Row>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <section className="align">
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <br></br><br></br><br></br>
                <h1>{`Hii! I'm Amritha `} </h1><br></br>
                <h3>{`I'm interested in `} <span className="txt-rotate" dataperiod="1000" data-rotate = {JSON.stringify(toRotate)} ><span className="wrap">{text}</span></span></h3>
                <p>Hii Everyone👋, I'm Amritha from Tuticorin, Tamil Nadu.<br></br>
                I'm an Engineering student👩‍🎓 from SASTRA University, Tamil Nadu.<br></br>
                I love building new things with creativity🛠💡.
                </p>
              </div>
              <br></br>
              <div className="icons align">
              <ul>
                <br></br>
                <li><a href="https://github.com/Amri174/" target="_blank" rel="noopener noreferrer"> <img src={GitHubIcon}  alt="github icon"/></a></li>
                <li><a href="https://www.linkedin.com/in/amritha174/" target="_blank" rel="noopener noreferrer"> <img src= {LinkedinIcon} alt="linkedi icon" /></a></li>
                <li><a href="mailto:amrithas174@gmail.com?subject=Your%20Subject&body=Your%20Message" target="_blank" rel="noopener noreferrer"><img src= {GmailIcon} alt="gmail icon"/></a></li>
              </ul>
              </div>
              </section>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img id="moon-bg" src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
            
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    </section>
    
    </section>
  )
}
