import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (

    <div className="footer" >
      <Container className="py-3">
        <Row className="justify-content-center mb-3">
          <Col md={8} className="text-center">
            <h1>ADMTRONIK</h1>
          </Col>
        </Row>
        <Row className="justify-content-center mb-3">
          <Col className="text-center">
            <div className="footer-social">
              <a href="#" className="text-white mx-1"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="text-white mx-1"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" className="text-white mx-1"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href="#" className="text-white mx-1"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <p>ADMTRONIK © Todos los derechos reservados</p>
            <p>Site developed by E Consulting</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
