//  import { Link } from "react-router-dom";

//  export default function NavBar() {
//      return (
//          <nav>
//              <h1>
//                  <Link to ="/Home">Home</Link>
//              </h1>
//              <button>
//                  <Link to="/SignUp">SignUp</Link>
//              </button>
//          </nav>
//      )
// }
import React from 'react';
import AutoPage from '../Pages/AutoPage';
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = ({ user, setUser, setToken }) => {

    const handleLogout = () => {
        setUser(null)
        setToken(null)
    }

    return (
        <Navbar>
            <Container>
                <Navbar.Brand>
                </Navbar.Brand>
                { !user ?
                    <Nav className="ms-auto">
                        <Button>
                            <Nav.Link as={Link} to="/app/Login"> Log in </Nav.Link>
                        </Button>
                        <Button>
                            <Nav.Link as={Link} to="/app/SignUp"> Sign up </Nav.Link>
                        </Button>
                    </Nav>
                    :
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/profile">{user.username}</Nav.Link>
                        <Button variant="outline-light"
                        style={{ color: 'red' }}
                        onClick={handleLogout}
                        >Log out</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
};

export default NavBar;