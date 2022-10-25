import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Header = () => {
    let [changeText, setChangeText] = useState(true);

    const handleChange = () => {
        return setChangeText(!changeText)
    }
    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/courses" className='fw-bolder fs-2'>E-Learing </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link href="/courses">Courses</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>

                    </Nav>


                    {/* user profile pic section */}
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>

                    {/* Toggle dark-light button */}
                    <button className='rounded' onClick={() => handleChange()}>{changeText ? "Dark Theme" : "Light Theme"}</button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;