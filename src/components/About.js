import React, { Component } from 'react'
import { Container, Tab, Row, Col, Nav } from 'react-bootstrap'

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
                                        className="mb-2"
                                    />
                                    <p>
                                        Aliquip deserunt adipisicing dolor quis minim sunt tempor in voluptate eiusmod nulla. Dolor cillum esse est eu minim fugiat qui reprehenderit. Dolore ad ipsum id sint anim. Excepteur duis minim excepteur in sit culpa commodo Lorem occaecat est laborum labore consequat. Irure in consectetur mollit cupidatat cupidatat quis aute consequat tempor in.
                                    </p>
                                 </Tab.Pane>
                                 <Tab.Pane eventKey="second">
                                    <img 
                                        src="https://ymedialabs.com/wp-content/uploads/2020/04/figma-prototype2-1675x1116.jpg"
                                        alt="second"
                                        width="800"
                                        height="400"
                                        className="mb-2"
                                    />
                                    <p>
                                        Aliquip deserunt adipisicing dolor quis minim sunt tempor in voluptate eiusmod nulla. Dolor cillum esse est eu minim fugiat qui reprehenderit. Dolore ad ipsum id sint anim. Excepteur duis minim excepteur in sit culpa commodo Lorem occaecat est laborum labore consequat. Irure in consectetur mollit cupidatat cupidatat quis aute consequat tempor in.
                                    </p>
                                 </Tab.Pane>
                                 <Tab.Pane eventKey="third">
                                    <img 
                                        src="https://i.ytimg.com/vi/Cx2dkpBxst8/maxresdefault.jpg"
                                        alt="third"
                                        width="800"
                                        height="400"
                                        className="mb-2"
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
                                        className="mb-2"
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
                                        className="mb-2"
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
 