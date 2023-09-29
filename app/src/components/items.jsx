import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import card_holder_img from "../resources/holder.png";


const Items = () =>{

    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);

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
                                        <Card.Img variant="top" src={card_holder_img} />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text style={{ textAlign: 'justify'}}>{item.description.substring(0,155) + ".."}</Card.Text>
                                            <Link to={item.url}>
                                                <Button variant="dark">View item</Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </Container>


        </div >
    )
}

export default Items;