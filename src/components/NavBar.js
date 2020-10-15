import React from "react";
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'

 const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed='top'  collapseOnSelect expand="lg xl" >
        <Navbar.Brand href="#home">BOUALLAGUI</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
};
export default NavBar