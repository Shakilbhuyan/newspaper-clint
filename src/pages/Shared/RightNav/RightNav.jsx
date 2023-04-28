import React from 'react';
import { Button, Container, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../QZone/Qzone';
import bg from '../../../assets/bg.png';

const RightNav = () => {
    return (
        <div>
            <h4>Login with</h4>
            <Button className='mb-2 w-75' variant="outline-primary"><FaGoogle /> Google</Button><br />
            <Button className='w-75' variant="outline-secondary"><FaGithub /> GitHub</Button>

            <div className='mt-2'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item className='text-primary'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='text-primary'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='text-danger'><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div>
                <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '400px' }}>
                    <Container>
                        <div className='text-white'>
                        <h1>Create an Amazing Newspaper</h1>
                        <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                        <Button variant='danger'>Learn More</Button>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default RightNav;