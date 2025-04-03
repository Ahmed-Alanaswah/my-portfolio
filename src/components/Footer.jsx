import { Container, Row, Col } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";


const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
        <Col size={12} sm={4} className="align-items-center">
            <h5>AHMAD <br/>ALANASWAH</h5>
        </Col>
        <Col size={12} sm={4} className="align-items-center text-end text-sm-center">
            <p>Copyright 2025. All Rights Reserved</p>
        </Col>
          
        <Col size={12} sm={4} className="align-items-center text-center text-sm-end">
        <div className="social-icon">
            <a href="#"><BsLinkedin size={24} color="white"/></a>
            <a href="#"><BsGithub size={24} color="white"/></a>
        </div>
        </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer