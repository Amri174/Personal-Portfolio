import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
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

  const skills = [
    require('../assets/img/icons/Python.svg').default,
    require('../assets/img/icons/Java.svg').default,
    require('../assets/img/icons/MySQL.svg').default,
    require('../assets/img/icons/Cpp.svg').default,
    require('../assets/img/icons/C.svg').default,
    require('../assets/img/icons/HTML5.svg').default,
    require('../assets/img/icons/CSS3.svg').default,
    require('../assets/img/icons/Tailwind-CSS.svg').default,
    require('../assets/img/icons/Sass.svg').default,
    require('../assets/img/icons/javascript.svg').default,
    require('../assets/img/icons/npm.svg').default,
    require('../assets/img/icons/React.svg').default,
    require('../assets/img/icons/Node-js.svg').default,
    require('../assets/img/icons/Django.svg').default,
  ];
  
  const tools = [
    require('../assets/img/icons/PowerBI.svg').default,
    require('../assets/img/icons/Postman.svg').default,
    require('../assets/img/icons/Git.svg').default,
    require('../assets/img/icons/GitHub-Codespaces.svg').default,
    require('../assets/img/icons/Docker.svg').default,
    require('../assets/img/icons/Kubernetes.svg').default,
    require('../assets/img/icons/StarUML.svg').default,
    require('../assets/img/icons/Canva.svg').default,
    require('../assets/img/icons/MATLAB.svg').default,
    require('../assets/img/icons/Excel.svg').default,
    require('../assets/img/icons/Notion.svg').default,
    require('../assets/img/icons/Vs-code.svg').default,
    require('../assets/img/icons/Jupyter-notebook.svg').default,
    require('../assets/img/icons/Google-colab.svg').default,
    require('../assets/img/icons/Anaconda.svg').default,
    require('../assets/img/icons/Virtualbox.svg').default,
    require('../assets/img/icons/Apache-netbeans.svg').default,
    require('../assets/img/icons/SQL-Developer.svg').default,
    require('../assets/img/icons/Ubuntu.svg').default,
    require('../assets/img/icons/freecad.svg').default,
  ];
  

  return (
    
    <section className="skillsection">
      <section className="skill" id="skills">
        <div className="container">
            <div className="row">
              <br></br>
                <div className="col-12">
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        {skills.map((skills, index) => (
                          <div className="item" key={index}>
                            <img src={skills} alt={`skills ${index}`} />
                          </div>
                          ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div> 
      </section>
      <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx">
                        <h2>Tools/IDE</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        {tools.map((tools, index) => (
                          <div className="item" key={index}>
                            <img src={tools} alt={`tools ${index}`} />
                          </div>
                          ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div> 
        <br></br><br></br><br></br><br></br><br></br>
      </section>
      <br></br><br></br><br></br><br></br><br></br>
    </section>
    
  )
}