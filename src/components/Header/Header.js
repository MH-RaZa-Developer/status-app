import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="/home">Status</Navbar.Brand>
                    <Nav className="ml-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/posts">Posts</Nav.Link>
                    <Nav.Link href="/comments">Comments</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
            </Navbar>
        </div>
    );
};

export default Header;