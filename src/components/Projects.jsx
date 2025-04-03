import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import midicalClinic from "../assets/img/midical-clinic.png";
import lavishRidetask from "../assets/img/lavishRidetask.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

function Projects() {
  
  const projects = [
    {
      title: "Medical Clicnic",
      description: "Design & Development",
      imgUrl: midicalClinic,
      url:"https://ahmed-alanaswah.github.io/medical-clinic-project/"
    },

    {
      title: "Landing Page",
      description: "Design & Development",
      imgUrl: lavishRidetask,
      url:"https://github.com/Ahmed-Alanaswah/LavishRideTask/blob/main/images/lavishRidetask.png"
    }
  ]
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
              <Row>
                {
                  projects.map((project, index) => {
                    return (
                      <ProjectCard
                        key={index}
                        {...project}
                        />
                    )
                  })
                }
              </Row>     
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

export default Projects