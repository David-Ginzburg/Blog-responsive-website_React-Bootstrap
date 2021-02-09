import React, { Component } from 'react'
import { Container, Row, Col, Media, ListGroup, Card } from 'react-bootstrap'

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row className="reverse">
                    <Col md="9">
                        <Media className="m-5">
                            <img 
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                                alt="JavaScript"
                            />
                            <Media.Body>
                                <h5>Blog Post</h5>
                                <p>Laboris excepteur proident adipisicing laboris. Do veniam aliquip velit irure voluptate do. Et enim aute nisi sint eiusmod cillum pariatur velit velit. Deserunt et veniam nostrud laborum amet mollit esse sunt duis.</p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img 
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                                alt="JavaScript"
                            />
                            <Media.Body>
                                <h5>Blog Post</h5>
                                <p>Laboris excepteur proident adipisicing laboris. Do veniam aliquip velit irure voluptate do. Et enim aute nisi sint eiusmod cillum pariatur velit velit. Deserunt et veniam nostrud laborum amet mollit esse sunt duis.</p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img 
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                                alt="JavaScript"
                            />
                            <Media.Body>
                                <h5>Blog Post</h5>
                                <p>Laboris excepteur proident adipisicing laboris. Do veniam aliquip velit irure voluptate do. Et enim aute nisi sint eiusmod cillum pariatur velit velit. Deserunt et veniam nostrud laborum amet mollit esse sunt duis.</p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md="3">
                        <h5 className="mt-5 text-center">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Html/Css</ListGroup.Item>
                                <ListGroup.Item>Js</ListGroup.Item>
                                <ListGroup.Item>Python</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                                <ListGroup.Item>SQL</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="mt-3" bg="light">
                            <Card.Body>
                                <Card.Title>Side widget</Card.Title>
                                <Card.Text>
                                    Magna anim sit dolore tempor cupidatat dolor elit qui id.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
