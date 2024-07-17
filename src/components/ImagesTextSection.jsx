import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import imgRight from '../assets/img3-min.png';
import imgLeft from '../assets/img2-min.png';
import imgInlineOne from '../assets/icono-min.png'; 
import imgInlineTwo from '../assets/fondo2-min.png';

const ImagesTextSection = () => {
    return (
        <Container className="images-text-section-container mt-6 my-5">
            <Row className="align-items-center">
                <Col md={4} className="d-flex justify-content-end mb-3 mb-md-0">
                    <img src={imgLeft} alt="Left Side" className="images-text-section-image img-fluid" />
                </Col>
                <Col md={4} className="d-flex justify-content-center flex-column text-center">
                    <h2 className="images-text-section-title">Nuestros Servicios</h2>
                    <p className="images-text-section-text">
                        Nuestros valores nos respaldan, calidad, precio y tiempos de entrega más competitivos que cualquier otra empresa.
                        Actualmente trabajamos con empresas de primera clase donde nuestro servicio es estrechar una relación y comunicación con nuestros clientes en todas las fases del proyecto para agregar valor a sus productos. Nuestro objetivo es comprender la demanda y necesidades de nuestros clientes para así lograr y alcanzar la mayor eficiencia y productividad de la misma. Realizamos tareas posventa para garantizar la satisfacción en cada uno de nuestros clientes. Documentamos cada una de las soluciones realizadas.
                        <br/><br/>
                        <img src={imgInlineOne} alt="Detail Image 1" className="img-fluid mx-auto d-block" style={{ maxWidth: '50%' }}/>
                        <br/>
                        <img src={imgInlineTwo} alt="Detail Image 2" className="img-fluid mx-auto d-block" style={{ maxWidth: '100%', marginTop: '20px' }}/>
                    </p>
                </Col>
                <Col md={4} className="d-flex justify-content-start">
                     <img src={imgRight} alt="Right Side" className="images-text-section-image img-fluid" />
                </Col>
            </Row>
        </Container>
    );
};

export default ImagesTextSection;
