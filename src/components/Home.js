import React, { Component } from 'react'
import CarouselComponent from './CaruselComponent'
import { Button, Card, CardDeck, Container } from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselComponent />
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
                        <Card text="primary">
                            <Card.Img 
                                variant="top"
                                src="https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Nulla est eiusmod fugiat sunt qui ullamco excepteur aliquip consectetur ex excepteur Lorem.</Card.Text>
                                <Button variant="primary">About Team</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        )
    }
}
