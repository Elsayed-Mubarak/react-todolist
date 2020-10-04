import React, { Component, Fragment } from 'react';
import { Nav, Form, FormControl, Button, Navbar } from 'react-bootstrap';


export default class BootNav extends Component {
    render() {
        return ( // fragment considered parent but dosent shown on html source page 
            <Fragment>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </Fragment>
        );
    }
}
