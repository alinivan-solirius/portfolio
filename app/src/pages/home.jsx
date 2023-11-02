import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import {Carousel, CloseButton} from "react-bootstrap";
import card_holder_img from "../resources/holder.png";

const Home = () => {
    const sources = ['Web', 'GitHub', 'GitLab', 'LinekdIn', 'Instagram', 'Facebook']
    const fileURL = "http://127.0.0.1:8081/sources/"
    const carouselURL = "http://127.0.0.1:8081/carousel/"
    return (
        <Container>
            <Container>
                <Carousel >
                    <Carousel.Item>
                        <Image src={carouselURL+'1.png'} fluid style={{objectFit: 'cover'}}/>
                        <Carousel.Caption>
                            <h3>Portfolio</h3>
                            <p>A place where you can add your items</p>
                            <Link to="/add">
                                <Button variant="dark" style={{border:"1px solid #3a3e42", padding: "1rem", margin:"1rem", minWidth:"100px"}}>Build your portfolio</Button>
                            </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={carouselURL+'2.png'} fluid style={{objectFit: 'cover'}}/>
                        <Carousel.Caption>
                            <h3>Your visit card</h3>
                            <p>Whether you are an engineer, artist or service provider you portfolio is your visit card.</p>
                            <Link to="/item">
                                <Button variant="dark" style={{border:"1px solid #3a3e42", padding: "1rem", margin:"1rem", minWidth:"100px"}}>View portfolios</Button>
                            </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={carouselURL+'3.png'} fluid style={{objectFit: 'cover'}}/>
                        <Carousel.Caption>
                            <h3>Versatile</h3>
                            <p>
                                Add, aggregate, maintain and share your portfolio items.
                            </p>
                            <Link to="/item">
                                <Button variant="dark" style={{border:"1px solid #3a3e42", padding: "1rem", margin:"1rem", minWidth:"100px"}}>Manage portfolio</Button>
                            </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>

            <Container>
                <div className="bgBlur" style={{textAlign:"center"}}>
                    <h1 className='landing-text'style = {{padding:'50px'}}>Sources </h1>
                    <div>
                        <Row>
                            {
                                sources.map((src, i) => (
                                 <Col lg={4} md={6} xs={12}>
                                <Image src={fileURL+'img'+i+'.png'} style={{width:"150px", height: "150px", borderRadius:"50%", marginTop: "2rem", objectFit: 'cover'}}/>
                                <h2 style={{margin:"1rem"}}>{src}</h2>
                            </Col>
                                ))
                            }
                        </Row>
                    </div>
                </div>
            </Container>
        </Container>
    )
}

export default Home;