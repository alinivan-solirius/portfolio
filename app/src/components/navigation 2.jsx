import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import '../style/navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import * as Icon from 'react-bootstrap-icons';

function Navigation() {
    return (
            <Navbar bg="dark" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand href="/">Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/item">
                                <span className="nav-button">
                                    <Icon.ListColumns size={20} style={{marginRight:"1rem"}}/>
                                </span>
                            </Nav.Link>
                        </Nav>
                        <Nav.Link href="/add">
                            <span className="nav-button">
                                <Icon.PlusSquare size={20} style={{marginRight:"1rem"}}/>
                            </span>
                        </Nav.Link>
                        <Nav.Link href="/account">
                            <span className="nav-button">
                                <Icon.PersonCircle size={20} style={{marginRight:"1rem"}}/>
                            </span>
                        </Nav.Link>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Item or user.."
                                className="me-2"
                                aria-label="Search"
                            />
                            <Icon.Search size={20} color={"lightgray"} style={{position:"relative", top:"9", right:"35"}}/>
                        </Form>



                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export default Navigation;