import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { GitHub, LinkedIn } from "@material-ui/icons";

import "./NavBar.css";
class NavBar extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Router>
              <Navbar
                className="color-nav"
                variant="dark"
                expand="lg"
                sticky="top"
              >
                <Navbar.Brand href="#home">
                  <img
                    src="/Logo_temp.png"
                    width="230"
                    height="50"
                    className="d-inline-block align-top"
                    alt=""
                  />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/">Contact Me</Nav.Link>
                    <NavDropdown title="Background" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        Education
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Experience
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Skills
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">
                        Projects
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Nav className="mr-right">
                    <Nav.Link>
                      <GitHub />
                    </Nav.Link>
                    <Nav.Link>
                      <LinkedIn />
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <br />
              <Switch>
                <Route exact path="/"></Route>
                <Route path="/"></Route>
                <Route path="/"></Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
