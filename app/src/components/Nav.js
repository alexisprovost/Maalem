import React from 'react';
import { Navbar } from 'react-bootstrap';

export default function NavBar() {
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
            <img
                alt=""
                src="https://picsum.photos/150/150"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            React Bootstrap
            </Navbar.Brand>
        </Navbar>
        </>
    );
}
