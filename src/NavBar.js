import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function NavBar() {
  return (
    <Navbar bg="black" variant="dark" expand="lg" stick="top">
      <LinkContainer to="/">
        <Navbar.Brand>Films</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-center">
          <LinkContainer to="/favorite-films">
            <Nav.Link>Favorite Films</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/favorite-characters">
            <Nav.Link>Favorite Characters</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
