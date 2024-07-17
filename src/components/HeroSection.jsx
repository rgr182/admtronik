import React from 'react';
import heroImage from '../assets/img_principal-min.png'; 
import { Container, Row, Col } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
      <Container className="hero-container">
        <Row className="justify-content-center align-items-center">
          <Col md={12} className="text-center">
            <div className="hero-text">
              <h1>AUTOMATIZACIÓN DE EQUIPOS</h1>
              <button className="btn btn-custom">Ver Servicios</button>
            </div>
            <div className="hero-description">
              <p> ADM Tronik es una compañía dedicada a trabajar con empresas en la rama de la manufactura, donde proveemos soluciones integrales de equipos. Nuestro enfoque actual es orientar y solucionar las problemáticas de nuestros clientes en cuanto a todo lo relacionado con automatización, diseño y fabricación para ofrecer opciones reales y además soluciones integrales y a la medida de cada cliente. Contamos con cuatro modelos de negocio: automatización, maquinados industriales, soldadura y proyectos industriales.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;