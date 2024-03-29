import Col from "react-bootstrap/Col"; 
import Navbar from "react-bootstrap/Navbar"; 
import Container from "react-bootstrap/Container"; 
import Nav from "react-bootstrap/Nav"; 
import Button from "react-bootstrap/Button"; 
import { HouseDoorFill, BookFill } from "react-bootstrap-icons"; 
import Form from "react-bootstrap/Form"; 
import InputGroup from "react-bootstrap/InputGroup"; 
import Image from "react-bootstrap/Image"; 
 import Logo from "../assets/logo/logo.png"
const NavBar = function () { 
  return ( 
    <Col xs={2}> 
      <Navbar expand="md" className="justify-content-between fixed-left" id="sidebar"> 
        <Container className="flex-column align-items-start"> 
          <Navbar.Brand > 
            <Image src={Logo} alt="Spotify Logo" width="131" height="40" /> 
          </Navbar.Brand> 
          <Button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarNavAltMarkup" 
            aria-controls="navbarNavAltMarkup" 
            aria-expanded="false" 
            aria-label="Toggle navigation" 
          > 
            <span className="navbar-toggler-icon"></span> 
          </Button> 
          <Navbar.Collapse id="navbarNavAltMarkup"> 
            <Nav className="flex-column"> 
              <Nav.Link className="d-flex align-items-center" href="#"> 
                <HouseDoorFill className="fs-5" /> 
                &nbsp; Home 
              </Nav.Link> 
              <Nav.Link className="d-flex align-items-center" href="#"> 
                <BookFill className="fs-5" /> 
                &nbsp; Your Library 
              </Nav.Link> 
              <Form className="input-group mt-3"> 
                <InputGroup> 
                  <Form.Control 
                    type="text" 
                    className="form-control" 
                    id="searchField" 
                    placeholder="Search" 
                    aria-label="Search" 
                    aria-describedby="basic-addon2" 
                  /> 
 
                  <Button variant="outline-secondary" size="sm" className="h-100" type="submit"> 
                    GO 
                  </Button> 
                </InputGroup> 
              </Form> 
            </Nav> 
          </Navbar.Collapse> 
        </Container> 
        <div className="nav-btn"> 
          <Button className="signup-btn" type="button"> 
            Sign Up 
          </Button> 
          <Button className="login-btn " type="button"> 
            Login 
          </Button> 
          <br /> 
          <a href="#" className="ml">Cookie Policy</a> |<a href="#" className="ml"> Privacy</a> 
        </div> 
      </Navbar> 
    </Col> 
  ); 
}; 
 
export default NavBar;