import React from "react";
import { Navbar, Nav } from "react-bootstrap";


function BooksNavbar() {


   return (
      <Navbar expand="lg" bg="dark" variant="dark">
         <Navbar.Brand href="#home">Google Books Search</Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
               <Nav.Link href="/Saved">Saved</Nav.Link>
               <Nav.Link href="/Search">Search</Nav.Link>
            </Nav>
         </Navbar.Collapse>
        
      </Navbar>
   );
}

export default BooksNavbar;