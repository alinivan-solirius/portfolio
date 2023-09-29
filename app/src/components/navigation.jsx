import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

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
                                Items
                            </Nav.Link>

                            <Nav.Link href="/add">
                                Add
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="dark" style={{border:"1px solid #3a3e42"}}>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export default Navigation;