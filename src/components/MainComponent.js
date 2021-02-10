import React, { Component } from 'react'
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Route, Switch } from "react-router-dom"
import { LinkContainer } from 'react-router-bootstrap'
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
                        <LinkContainer to="/">
                            <Navbar.Brand>
                                <img
                                    src={logo}
                                    height="30"
                                    width="30"
                                    className="d-inline-block align-top"
                                    alt="Logo"
                                />{" "}
                                React site
                            </Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <LinkContainer to="/">
                                    <Nav.Link>Home</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/about">
                                    <Nav.Link>AboutUs</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/contacts">
                                    <Nav.Link>Contacts</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/blog">
                                    <Nav.Link>Blog</Nav.Link>
                                </LinkContainer>
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

                    
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contacts" component={Contacts} />
                    <Route exact path="/blog" component={Blog} />
                </Switch>
            </>
        )
    }
}
