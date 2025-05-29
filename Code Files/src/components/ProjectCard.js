import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectUrl, linkText}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Reference Img"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <span>
            <a 
              href={projectUrl} 
              target="_blank" 
              rel="noopener noreferrer"
            >
            {linkText}
            </a>
          </span>
        </div>
        </div>
    </Col>
  )
}
