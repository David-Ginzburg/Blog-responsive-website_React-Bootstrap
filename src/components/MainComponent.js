import React, { Component } from 'react'
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import logo from '../logo.svg'

import Home from './Home'
import About from './About'
import Contacts from './Contacts'
import Blog from './Blog'


export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/" >
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />{" "}
                            React site
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/" >Home</Nav.Link>
                                <Nav.Link href="/about" >AboutUs</Nav.Link>
                                <Nav.Link href="/contacts" >Contacts</Nav.Link>
                                <Nav.Link href="/blog" >Blog</Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl 
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2"
                                />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contacts" component={Contacts} />
                        <Route exact path="/blog" component={Blog} />
                    </Switch>
                </Router>
            </>
        )
    }
}
