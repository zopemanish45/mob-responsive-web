import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function ContactUs() {
  return (
    <Container className="my-5">
      <h2>Contact Us</h2>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Your message here" />
        </Form.Group>
        <Button variant="primary" type="submit">Send</Button>
      </Form>
    </Container>
  );
}

export default ContactUs;

