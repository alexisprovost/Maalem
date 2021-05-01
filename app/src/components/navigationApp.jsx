import React,{useState} from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Badge} from 'react-bootstrap';
import { Container } from '../Popup/Container';

const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
};


    const handleSelect = (e) =>{
        console.log(e);
    }






export const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg" style={{zIndex:'2'}}>
            <Navbar.Brand href="#home">Maalem</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" onSelect={handleSelect}>
                    <NavDropdown title="Langue" id="basic-nav-dropdown">
                        <NavDropdown.Item eventKey="Français" >Français</NavDropdown.Item>
                        <NavDropdown.Item eventKey="Anglais" >Anglais</NavDropdown.Item>
                        <NavDropdown.Item eventKey="Espagnol">Espagnol</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Math" id="basic-nav-dropdown">
                        <NavDropdown.Item eventKey="Calcul 1">Calcul 1</NavDropdown.Item>
                        <NavDropdown.Item eventKey="Calcul 2">Calcul 2</NavDropdown.Item>
                        <NavDropdown.Item eventKey="Mathématiques discrètes">Mathématiques discrètes</NavDropdown.Item>
                        <NavDropdown.Item eventKey="Algèbre linéaire">Algèbre linéaire</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Physique et Chimie" id="basic-nav-dropdown">
                        <NavDropdown.Item eventKey="Chimie générale: la matière">Chimie générale: la matière</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="Mécanique">Mécanique</NavDropdown.Item>
                        <NavDropdown.Item eventKey="Électricité et magnétisme">Électricité et magnétisme</NavDropdown.Item>
                        <NavDropdown.Item eventKey="Ondes et physique moderne">Ondes et physique moderne</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Philosophie" id="basic-nav-dropdown">
                        <NavDropdown.Item eventKey="Philosophie et rationalité">Philosophie et rationalité</NavDropdown.Item>
                        <NavDropdown.Item eventKey="L'être humain">L'être humain</NavDropdown.Item>
                        <NavDropdown.Item eventKey="Éthique et politique">Éthique et politique</NavDropdown.Item>
                    </NavDropdown>
                    <Container triggerText={'Poser une question'} onSubmit={onSubmit}/>
                </Nav>
                <Nav className='.mr-auto'>                   
                    <Nav.Link href="http://localhost:9000/auth/logout" >DÉCONNECTEZ-VOUS</Nav.Link> 
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
    )
}
