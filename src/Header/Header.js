import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../Contexts/AuthProvider';
import { Tooltip } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './Header.css';
import { Image } from 'react-bootstrap';
import logo from '../assests/logo.jpg'



const Header = () => {
    const navigate = useNavigate();
    const { user, logOut } = useContext(AuthContext);
    let [changeText, setChangeText] = useState(true);

    const handleChange = () => {
        return setChangeText(!changeText)
    }
    const handleLogOut = () => {
        logOut()
            .then(() => { navigate('/') })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="dark" variant="dark">
            <Container>

                <Navbar.Brand href="/courses" className='fw-bolder fs-2'><img className="logo-img" src={logo} alt="" srcset="" />E-Learning </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link href="/courses">Courses</Nav.Link>
                        <Nav.Link href="/faq">FAQ</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>

                    </Nav>


                    {/* user profile pic section */}
                    <Nav className="me-4 text-white">
                        {
                            user?.uid ?
                                <>
                                    <Link to="/profile">
                                        {user?.photoURL ?
                                            <Image
                                                style={{ height: '40px', marginRight: '8px' }}
                                                roundedCircle
                                                src={user?.photoURL}
                                                data-toggle="tooltip" data-placement="top" title={user?.displayName}
                                            >
                                            </Image>
                                            : <FaUser className='user-icon' data-toggle="tooltip" data-placement="top" title={user?.displayName} ></FaUser>
                                        }
                                    </Link>
                                    <button className='headerButton' onClick={handleLogOut}>Log Out</button>

                                </>
                                :
                                <>
                                    <button className='headerButton'><Link className='header-btn-link' to='/login'>Login</Link></button>

                                    <button className='headerButton'><Link className='header-btn-link' to='/register'>Register</Link></button>
                                </>
                        }

                    </Nav>
                    <Nav>
                        {/* Toggle dark-light button */}
                        <button className='headerButton' onClick={() => handleChange()}>{changeText ? "Dark Theme" : "Light Theme"}</button>
                    </Nav>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;