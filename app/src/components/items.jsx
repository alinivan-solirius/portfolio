import { useState, useEffect } from "react";
import '../style/items.css';
import '../style/App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import card_holder_img from "../resources/holder.png";
import {CardBody, CloseButton, Modal} from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';
import Form from "react-bootstrap/Form";


const Items = () =>{
    const appURL = "http://localhost:3000"
    const serverURL = "http://localhost:8080"
    const fileURL = "http://127.0.0.1:8081/items/"

    const [currentItem, setCurrentItem] = useState([]);
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const [showDelete, setShowDelete] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    const handleCloseEditModal = () => setShowEdit(false);
    const handleShowEditModal = e => {
        setCurrentItem(null);
        setShowEdit(true);

    }
    const handleCloseDeleteModal = () => setShowDelete(false);
    const handleShowDeleteModal = (e) => {
        setShowDelete(true)
        console.log(e)
    };

    const getItems = () => {
        axios.get(serverURL+'/api/item')
            .then((response) => {
                setLoaded(true);
                setItems(response.data);
            })
            .catch((error) => {
                setLoaded(true);
                setError(error);
            });
    }

    const deleteItem = (e) => {
        handleCloseDeleteModal();
        console.log(e.target.id);
    }

    useEffect(() => {
        getItems();
    }, []);


    return (
        <div className="background">
            <Container>
                <div className="bgBlur">
                    <h1 className='landing-text'style = {{padding:'20px'}}>Items </h1>
                    <div>
                        <Row>
                            {items.map((item, i) => (
                                <Col lg={4} md={6} xs={12} key={i}>
                                    <Card key={i} variant="dark" style={{ margin: '0.2rem', backgroundColor: '#1e1e1f' , color: '#d7d7d9'}}>
                                        <Card.Img variant="top" src={fileURL+item.images[0].url.split("/").pop()} />
                                        {console.log(fileURL+item.images[0].url.split("/").pop())}
                                        <Card.Body  style={{position:"absolute", top:"0", right:"0"}}>
                                            <span className="edit-button">
                                                <Icon.PencilSquare key={i} title={item.title} url={item.url} description={item.description} onClick={handleShowEditModal} size={30}/>
                                            </span>
                                            <span className="delete-button">
                                                 <Icon.XCircle key={i} onClick={handleShowDeleteModal} size={30} style={{marginLeft:".5rem"}}/>
                                            </span>
                                        </Card.Body>
                                        <Card.Body>
                                            <Card.Text style={{ textAlign: 'right'}}>@AlinIvan</Card.Text>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text style={{ textAlign: 'justify', paddingTop:"1rem", paddingBottom:"1rem"}}>{item.description.substring(0,155) + ".."}</Card.Text>
                                            <Link to={item.url}>
                                                <Button variant="dark" style={{border:"1px solid #3a3e42", padding:"0.7rem"}}>View item</Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                        <Modal show={showEdit} onHide={handleCloseEditModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>Update item</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form noValidate>
                                    <Row className="mb-3">
                                        <Card.Img variant="top" src={card_holder_img}/>
                                        <Form.Group controlId="formFileLg" className="mb-3">
                                            <Form.Label style={{fontWeight:"bold"}}>Update image</Form.Label>
                                            <Form.Control type="file" size="lg" />
                                        </Form.Group>
                                        <Form.Group as={Col} md="12" controlId="validationCustom01">
                                            <Form.Label style={{fontWeight:"bold"}}>Item title</Form.Label>
                                            <Form.Control  style={{padding:"1rem", marginBottom:"1rem"}}
                                                           required
                                                           type="text"
                                                           value={"Title"}
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="12" controlId="validationCustom02">
                                            <Form.Label  style={{fontWeight:"bold"}}>URL</Form.Label>
                                            <Form.Control  style={{padding:"1rem", marginBottom:"1rem"}}
                                                           required
                                                           type="text"
                                                           value={"URL"}
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="12" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label  style={{fontWeight:"bold"}}>Update description</Form.Label>
                                            <Form.Control style={{padding:"1rem", marginBottom:"1rem"}}
                                                          required
                                                          as="textarea" rows={4}
                                                          type="text"
                                                          value={"Description"}
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="light" onClick={handleCloseEditModal}>Cancel</Button>
                                <Button variant="dark" onClick={handleCloseEditModal} style={{padding: "0.8rem"}} type="submit">Save changes</Button>
                            </Modal.Footer>
                        </Modal>

                        <Modal show={showDelete} onHide={handleCloseDeleteModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>Delete item</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
                            <Modal.Footer>
                                <Button variant="light" onClick={handleCloseDeleteModal}>
                                    Cancel
                                </Button>
                                <Button variant="dark" onClick={deleteItem} style={{padding: "0.8rem"}}>
                                    Delete
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </Container>



        </div >
    )
}

export default Items;