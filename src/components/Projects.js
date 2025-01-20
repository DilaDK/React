import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/imgg/felix-mooneeram-evlkOfkQ5rE-unsplash.jpg";
import projImg2 from "../assets/imgg/ohmy.png";
import projImg3 from "../assets/imgg/holly-mandarich-UVyOfX3v0Ls-unsplash.jpg";
import colorSharp2 from "../assets/imgg/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Theaterlaak",
      description: "theater kaarten verkoop systeem",
      imgUrl: projImg1,
    },
    {
      title: "Oh, my cult! by Smooth soup studios",
      description: "Game development project",
      imgUrl: projImg2,
    },
    {
      title: "Outdoorfusion",
      description: "Data analystic",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projecten</h2>
                <p>Dit zijn de projecten waarbij ik samen heb gewerkt of alleen heb gemaakt.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Overzicht</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Over mij</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Interesse</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
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
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Ik ben een gemotiveerde student die altijd doelgericht werkt, professioneel bezig is met school en andere belangrijke zaken, prioriteiten stelt, georganiseerd blijft en gelooft dat hard werken en toewijding de sleutel tot succes zijn. </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Ik hou ervan om mijn creativiteit de vrije loop te laten door te lezen, te knutselen en mezelf steeds uit te dagen om nieuwe ideeën en projecten tot leven te brengen. </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}