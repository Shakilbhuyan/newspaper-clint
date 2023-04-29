import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className='mt-4 bg-dark text-white p-4'>
        <Container fluid>
          <Row>
            <Col md={4}>
              <h5>About Us</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Col>
            <Col md={4}>
              <h5>Contact Us</h5>
              <p>1234 Main St, Anytown USA</p>
              <p>Phone: 555-555-5555</p>
              <p>Email: info@example.com</p>
            </Col>
            <Col md={4}>
              <h5>Follow Us</h5>
              <p>Facebook</p>
              <p>Twitter</p>
              <p>Instagram</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
};

export default Footer;