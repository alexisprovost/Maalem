import { Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

export const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Maalem</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Langue" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Français</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Anglais</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Espagnol</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Math" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Calcul 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Calcul 2</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Mathématiques discrètes</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Algèbre linéaire</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Physique et Chimie" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Chimie générale: la matière</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">Mécanique</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Électricité et magnétisme</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Ondes et physique moderne</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Philosophie" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Philosophie et rationalité</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">L'être humain</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Éthique et politique</NavDropdown.Item>
                    </NavDropdown>
                    
                </Nav>
                <Nav className='.mr-auto'>
                   <Nav.Link href="http://localhost:9000/auth/logout" >DÉCONNECTEZ-VOUS</Nav.Link> 
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
    )
}
