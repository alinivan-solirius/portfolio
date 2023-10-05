import Container from "react-bootstrap/Container";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const Add = () =>{
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div className="background">
            <Container>
                <div className="bgBlur">
                    <h1 className='landing-text'style = {{padding:'20px'}}>Add new item </h1>
                    <div>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group controlId="formFileLg" className="mb-3">
                                    <Form.Label style={{fontWeight:"bold"}}>Image</Form.Label>
                                    <Form.Control type="file" size="lg" />
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label style={{fontWeight:"bold"}}>Item title</Form.Label>
                                    <Form.Control  style={{padding:"1rem", marginBottom:"1rem"}}
                                        required
                                        type="text"
                                        placeholder="Title.."
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom02">
                                    <Form.Label  style={{fontWeight:"bold"}}>URL</Form.Label>
                                    <Form.Control  style={{padding:"1rem", marginBottom:"1rem"}}
                                        required
                                        type="text"
                                        placeholder="URL.."
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="12" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label  style={{fontWeight:"bold"}}>Description</Form.Label>
                                    <Form.Control style={{padding:"1rem", marginBottom:"1rem"}}
                                                  required
                                                  as="textarea" rows={10}
                                                  type="text"
                                                  placeholder="Description.."
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Button variant="dark" style={{padding: "0.8rem"}} type="submit">Submit form</Button>
                        </Form>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Add;