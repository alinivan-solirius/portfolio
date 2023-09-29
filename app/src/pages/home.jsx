import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import one from "../resources/1.png";
import two from "../resources/2.png";
import three from "../resources/3.png";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import {Carousel, CloseButton} from "react-bootstrap";
import card_holder_img from "../resources/holder.png";

const Home = () =>{
    return (
        <Container>

            <Container>
                <Carousel>
                    <Carousel.Item>
                        <Image src={one} fluid/>
                        <Carousel.Caption>
                            <h3>Portfolio</h3>
                            <p>A place where you can add your items</p>
                            <Link to="/add">
                                <Button variant="primary" style={{border:"1px solid #3a3e42", padding: "1rem", margin:"1rem", minWidth:"100px"}}>Build your portfolio</Button>
                            </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={two} fluid/>
                        <Carousel.Caption>
                            <h3>Your visit card</h3>
                            <p>Whether you are an engineer, artist or service provider you portfolio is your visit card.</p>
                            <Link to="/item">
                                <Button variant="primary" style={{border:"1px solid #3a3e42", padding: "1rem", margin:"1rem", minWidth:"100px"}}>View portfolios</Button>
                            </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={three} fluid/>
                        <Carousel.Caption>
                            <h3>Versatile</h3>
                            <p>
                                Add, aggregate, maintain and share your portfolio items.
                            </p>
                            <Link to="/item">
                                <Button variant="primary" style={{border:"1px solid #3a3e42", padding: "1rem", margin:"1rem", minWidth:"100px"}}>Manage portfolio</Button>
                            </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>

            <Container>
                <div className="bgBlur" style={{textAlign:"center"}}>
                    <h1 className='landing-text'style = {{padding:'50px'}}>Available sources </h1>
                    <div>
                        <Row>
                            <Col lg={4} md={6} xs={12}>
                                <Image src={card_holder_img}/>
                                <h2 style={{margin:"1rem"}}>GitHub</h2>
                            </Col>
                            <Col lg={4} md={6} xs={12}>
                                <Image src={card_holder_img}/>
                                <h2 style={{margin:"1rem"}}>GitLab</h2>
                            </Col>
                            <Col lg={4} md={6} xs={12}>
                               <Image src={card_holder_img}/>
                                <h2 style={{margin:"1rem"}}>LinkedIn</h2>
                            </Col>
                            <Col lg={4} md={6} xs={12}>
                                <Image src={card_holder_img}/>
                                <h2 style={{margin:"1rem"}}>Instagram</h2>
                            </Col>
                            <Col lg={4} md={6} xs={12}>
                                <Image src={card_holder_img}/>
                                <h2 style={{margin:"1rem"}}>Facebook</h2>
                            </Col>
                            <Col lg={4} md={6} xs={12}>
                                <Image src={card_holder_img}/>
                                <h2 style={{margin:"1rem"}}>Website</h2>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>

        </Container>
    )
}

export default Home;