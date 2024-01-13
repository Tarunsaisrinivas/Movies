import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Form,Row,Col } from "react-bootstrap";
import logo from '../assets/movies-tv.png'
import '../Scss/Navbar.scss'
function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar1">
      <Container style={{color:'black',fontWeight:'bold'}}>
        <Navbar.Brand href="#home" >
          <img src={logo} alt="" width={45}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" >
              Home
            </Nav.Link>
            <Nav.Link href="#link" >
              Link
            </Nav.Link>
            <NavDropdown
              title={<span className="custom-dropdown-title">Dropdown</span>}
              id="basic-nav-dropdown"
              className="custom-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
              />
            </Col>
          </Row>
        </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
