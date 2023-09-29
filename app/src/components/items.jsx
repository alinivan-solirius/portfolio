import { useState, useEffect } from "react";
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


const Items = () =>{

    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const [showDelete, setShowDelete] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    const handleCloseDeleteModal = () => setShowDelete(false);
    const handleShowDeleteModal = () => setShowDelete(true);
    const handleCloseEditModal = () => setShowEdit(false);
    const handleShowEditModal = () => setShowEdit(true);

    const getItems = () => {
        axios.get('http://localhost:8080/api/item')
            .then((response) => {
                setLoaded(true);
                setItems(response.data);
            })
            .catch((error) => {
                setLoaded(true);
                setError(error);
            });
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
                            {items.map((item) => (
                                <Col lg={4} md={6} xs={12} key={item.id}>
                                    <Card variant="dark" style={{ margin: '0.2rem', backgroundColor: '#1e1e1f' , color: '#d7d7d9'}}>
                                        <Card.Img variant="top" src={card_holder_img}/>
                                        <Card.Body  style={{position:"absolute", top:"0", right:"0"}}>
                                            <Icon.PencilSquare onClick={handleShowEditModal} size={30} color={"#e0b97b"}/>
                                            <Icon.XCircle onClick={handleShowDeleteModal} size={30} color={"#e6857e"} style={{marginLeft:".5rem"}}/>
                                        </Card.Body>
                                        <Card.Body>

                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text style={{ textAlign: 'justify'}}>{item.description.substring(0,155) + ".."}</Card.Text>
                                            <Link to={item.url}>
                                                <Button variant="primary" style={{border:"1px solid #3a3e42"}}>View item</Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </Container>
            <Modal show={showDelete} onHide={handleCloseDeleteModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete item</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDeleteModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseDeleteModal}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showEdit} onHide={handleCloseEditModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Update item</Modal.Title>
                </Modal.Header>
                <Modal.Body>To be added</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEditModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseEditModal}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}

export default Items;