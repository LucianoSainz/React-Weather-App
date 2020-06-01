import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navigation = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="md">
            <Navbar.Brand as="div"><Link to="/">Weather App</Link></Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link as="div"><Link to="/">Home</Link></Nav.Link>
                <Nav.Link as="div"><Link to="/Weather">Weather</Link></Nav.Link>
                <Nav.Link as="div"><Link to="/AboutUs">About us</Link></Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Navigation;