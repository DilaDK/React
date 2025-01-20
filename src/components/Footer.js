import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/imgg/logo.svg";
import navIcon1 from "../assets/imgg/nav-icon1.svg";
import navIcon3 from "../assets/imgg/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/dila-karatas-51006a187/" target="_blank"><img src={navIcon1} alt="" /></a>
            <a href="https://www.instagram.com/dml_40/" target="_blank"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}