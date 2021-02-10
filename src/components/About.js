import React, { Component } from 'react'
import { Container, Tab, Row, Col, Nav, Button, Card, CardDeck } from 'react-bootstrap'

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fift">Librares</Nav.Link>
                                </Nav.Item> 
                            </Nav>
                        </Col>
                        <Col sm={9}>
                             <Tab.Content className="mt-2">
                                 <Tab.Pane eventKey="first">
                                    <img 
                                        src="https://miro.medium.com/max/5236/1*4clb6MHlPKalAA1jDy-ahA.jpeg"
                                        alt="first"
                                        width="800"
                                        height="400"
                                        className="mb-2 img100"
                                    />
                                    <p>
                                        Aliquip deserunt adipisicing dolor quis minim sunt tempor in voluptate eiusmod nulla. Dolor cillum esse est eu minim fugiat qui reprehenderit. Dolore ad ipsum id sint anim. Excepteur duis minim excepteur in sit culpa commodo Lorem occaecat est laborum labore consequat. Irure in consectetur mollit cupidatat cupidatat quis aute consequat tempor in.
                                    </p>
                                 </Tab.Pane>
                                 <Tab.Pane eventKey="second">
                                    <Container className="mb-3">
                                        <h2 className="text-center m-4">Our team</h2>
                                        <CardDeck>
                                            <Card bg="info">
                                                <Card.Img 
                                                    variant="bottom"
                                                    src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                                />
                                                <Card.Body>
                                                    <Card.Title>Developers</Card.Title>
                                                    <Card.Text>Nulla est eiusmod fugiat sunt qui ullamco excepteur aliquip consectetur ex excepteur Lorem.</Card.Text>
                                                    <Button variant="primary">About Team</Button>
                                                </Card.Body>
                                            </Card>
                                            <Card border="success">
                                                <Card.Img 
                                                    variant="top"
                                                    src="https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=700&w=1200"
                                                    height="232"
                                                />
                                                <Card.Body>
                                                    <Card.Title>Developers</Card.Title>
                                                    <Card.Text>Nulla est eiusmod fugiat sunt qui ullamco excepteur aliquip consectetur ex excepteur Lorem.</Card.Text>
                                                    <Button variant="primary">About Team</Button>
                                                </Card.Body>
                                            </Card>
                                        </CardDeck>
                                    </Container>
                                 </Tab.Pane>
                                 <Tab.Pane eventKey="third">
                                    <img 
                                        src="https://i.ytimg.com/vi/Cx2dkpBxst8/maxresdefault.jpg"
                                        alt="third"
                                        width="800"
                                        height="400"
                                        className="mb-2 img100"
                                    />
                                    <p>
                                        Aliquip deserunt adipisicing dolor quis minim sunt tempor in voluptate eiusmod nulla. Dolor cillum esse est eu minim fugiat qui reprehenderit. Dolore ad ipsum id sint anim. Excepteur duis minim excepteur in sit culpa commodo Lorem occaecat est laborum labore consequat. Irure in consectetur mollit cupidatat cupidatat quis aute consequat tempor in.
                                    </p>
                                 </Tab.Pane>
                                 <Tab.Pane eventKey="fourth">
                                    <img 
                                        src="https://i.vimeocdn.com/video/822590268.webp?mw=1200&mh=682&q=70"
                                        alt="fourth"
                                        width="800"
                                        height="400"
                                        className="mb-2 img100"
                                    />
                                    <p>
                                        Aliquip deserunt adipisicing dolor quis minim sunt tempor in voluptate eiusmod nulla. Dolor cillum esse est eu minim fugiat qui reprehenderit. Dolore ad ipsum id sint anim. Excepteur duis minim excepteur in sit culpa commodo Lorem occaecat est laborum labore consequat. Irure in consectetur mollit cupidatat cupidatat quis aute consequat tempor in.
                                    </p>
                                 </Tab.Pane>
                                 <Tab.Pane eventKey="fift">
                                    <img 
                                        src="https://figma.imgix.net/2xAFjMYfdlKtin00hsCrwn/469731a5ec5ff3135ecafe9663a57c63/Refresh_Launch_Header_II.png"
                                        alt="fift"
                                        width="800"
                                        height="400"
                                        className="mb-2 img100"
                                    />
                                    <p>
                                        Aliquip deserunt adipisicing dolor quis minim sunt tempor in voluptate eiusmod nulla. Dolor cillum esse est eu minim fugiat qui reprehenderit. Dolore ad ipsum id sint anim. Excepteur duis minim excepteur in sit culpa commodo Lorem occaecat est laborum labore consequat. Irure in consectetur mollit cupidatat cupidatat quis aute consequat tempor in.
                                    </p>
                                 </Tab.Pane>
                             </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
 