import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand>Herramienta Web de Selección de Productos</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="registros">Registros</Nav.Link>
            <Nav.Link href="login">Inicio de Sesión</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
