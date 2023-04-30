import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <Container>
                <Row className="mt-3">
                    <Col md={{ span: 8, offset: 2 }}>
                        <Card className='bg-dark text-white'>
                            <Card.Body>
                                <Card.Title>Terms and Conditions</Card.Title>
                                <Card.Text>
                                   <ul>
                                    <li><span className='text-danger'>General Use:</span> By accessing or using the website, you agree to be bound by these terms and conditions, as well as any applicable laws and regulations. If you do not agree with any of these terms, you must not use the website.</li>
                                   <li><span className='text-danger'>Ownership:</span> The website and its content are owned by the website owner and are protected by applicable copyright and trademark laws.</li>
                                   <li><span className='text-danger'>Content:</span> The website owner reserves the right to modify, remove or add content to the website at any time without notice.</li>
                                   <li><span className='text-danger'>User Conduct: </span> You agree to use the website only for lawful purposes and in a manner that does not infringe on the rights of others or restrict their use and enjoyment of the website.</li>
                                   <li><span className='text-danger'>Prohibited Activities: </span>You may not use the website for any illegal or unauthorized purpose, including but not limited to: hacking, transmitting viruses or other harmful code, or attempting to gain unauthorized access to any part of the website.</li>
                                   <li><span className='text-danger'>Third-Party Websites:</span> The website may contain links to third-party websites that are not owned or controlled by the website owner. The website owner has no control over these websites and is not responsible for their content, privacy policies, or any harm that may result from your use of them.</li>
                                   <li><span className='text-danger'>Disclaimer of Warranties::</span> The website is provided "as is" and without warranties of any kind, whether express or implied. The website owner makes no warranties or representations regarding the accuracy, completeness, reliability, or availability of the website or its content.</li>
                                   <li><span className='text-danger'>Limitation of Liability:</span> The website owner shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of the website or its content.</li>
                                   <li><span className='text-danger'>Indemnification:</span> You agree to indemnify and hold harmless the website owner, its affiliates, officers, directors, employees, and agents from any claims, damages, or expenses arising out of your use of the website or its content.</li>
                                   <li><span className='text-danger'>Governing Law::</span> These terms and conditions shall be governed by and construed in accordance with the laws of the jurisdiction where the website owner is located, without giving effect to any principles of conflicts of law.</li>
                                   <li><span className='text-danger'>Changes to Terms and Conditions:</span> The website owner reserves the right to modify these terms and conditions at any time without notice. Your continued use of the website after such modifications will constitute your acceptance of the new terms and conditions.</li>
                                   </ul>

                                </Card.Text>
                                <h3>Go Back to <Link to="/register">Register</Link></h3>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Terms;