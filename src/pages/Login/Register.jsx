import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container style={{ boxShadow: '0px 0px 5px rgba(0, 0, 255, 0.5)' }} className="mx-auto w-50  mt-4 p-4">
        <h3>Please Register</h3>
        <Form >
            <Form.Group controlId="email">
                <Form.Label className='fw-bold'  >Email </Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name='email'
                />
            </Form.Group>
            <Form.Group controlId="name">
                <Form.Label className='fw-bold' >Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    name='name'
                />
            </Form.Group>
            <Form.Group controlId="photoUrl">
                <Form.Label className='fw-bold' >PhotoURL </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="PhotoURL"
                    name='photoUrl'
                />
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label className='fw-bold' >Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name='password'
                />
            </Form.Group>
            <Button className='mt-2 w-100' variant="dark" type="submit">
                Register
            </Button>
            <br />
            <Form.Text className='text-secondary'>
                Already Have An Account?
                <Link className='text-decoration-none  link-danger ' to="/login">Please Login!</Link>
            </Form.Text>
            <Form.Text className='text-success'>

            </Form.Text>
            <Form.Text className='text-success'>

            </Form.Text>
        </Form>
    </Container>
    );
};

export default Register;