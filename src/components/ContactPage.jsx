import React from 'react';
import { Container, Form, Button, Image } from 'react-bootstrap';
import image2 from '../assets/cuadro1-min.png';  // Asegúrate de que la ruta es correcta

const ContactPage = () => {
    return (
        <Container className="contact-form">
            <div className="image-container">
                <div className="image-item">
                    <div className="image-overlay-container">
                        <Image src={image2} alt="Imagen de fondo" className="background-image" />
                        <div className="contact-info">
                            <p>ERIC.INIGUEZ@ADMTRONIK.COM</p>
                            <p>SALES@ADMTRONIK.COM</p>
                            <p>TEL: 3-80-41-95</p>
                            <p>CEL: (656) 2-00-61-87</p>
                        </div>
                    </div>
                </div>
            </div>
            <h2>CONTACTANOS</h2>
            <Form>
                <Form.Group className="form-group-custom" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Nombre" />
                </Form.Group>
                <Form.Group className="form-group-custom" controlId="formBasicPhone">
                    <Form.Control type="tel" placeholder="Teléfono" />
                </Form.Group>
                <Form.Group className="form-group-custom" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="E-mail" />
                </Form.Group>
                <Form.Group className="form-group-custom" controlId="formBasicSubject">
                    <Form.Control type="text" placeholder="Asunto" />
                </Form.Group>
                <Form.Group className="form-group-custom" controlId="formBasicMessage">
                    <Form.Control as="textarea" rows={3} placeholder="Mensaje" />
                </Form.Group>
                <Button type="submit">Enviar</Button>
            </Form>
        </Container>
    );
};

export default ContactPage;
