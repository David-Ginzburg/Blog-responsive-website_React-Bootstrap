import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default class Contacts extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            text: "",
            checkout: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault()
        alert(`
        email: ${this.state.email}
        text: ${this.state.text}
        checkout: ${this.state.checkout}`)
        this.setState({
            email: this.state.email,
            text: this.state.text,
            checkout: this.state.checkout
        }) 
    }

    render() {
        return (
            <Container style={{width: 500}}>
                <h1 className="text-center">Contact Us</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Asdress</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} name="email" />
                        <Form.Text>
                            We'll never share your personal data to anyone!
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicText">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" placeholder="Enter text" rows="3" value={this.state.text} onChange={this.handleChange} name="text" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckout">
                        <Form.Check type="checkbox" label="Check me out" checked={this.state.checkout} onChange={this.handleChange} name="checkout" />
                    </Form.Group>

                    <Button type="submit" variant="primary">Submit</Button>

                </Form>
            </Container>
        )
    }
}
