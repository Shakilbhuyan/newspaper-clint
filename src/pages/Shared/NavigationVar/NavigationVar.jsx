import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';

const NavigationVar = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut =()=>{
        logOut()
        .then(()=>{})
        .catch(error => console.log(error))
    }
    return (
        <Container>
             <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav className='d-flex align-items-center'>
                           {user &&
                            <FaUserCircle style={{fontSize :'1.5rem', marginRight:'8px'}}></FaUserCircle>
                           }
                            
                            {
                                user ? <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                                <Link to="/login"><Button variant="secondary">Login</Button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationVar;