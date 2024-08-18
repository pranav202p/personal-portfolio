import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4} className="d-flex align-items-stretch">
      <div 
        className="proj-imgbx d-flex flex-column" 
        onClick={() => window.open(link, "_blank")}
        style={{ cursor: 'pointer' }}
      >
        <div className="img-container">
          <img src={imgUrl} className="img-fluid" alt={title} />
        </div>
        <div className="proj-txtx mt-auto">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
