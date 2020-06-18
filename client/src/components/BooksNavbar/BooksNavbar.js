import React from "react";
import { Navbar, Nav } from "react-bootstrap";


function BooksNavbar() {

//    let navEventKey = "saved";
   
//    const handleNavSelect = eventKey => {
//       console.log("active nav: ", eventKey)
//       eventKey = eventKey;
//    };

   return (
      <Navbar expand="sm" bg="secondary" variant="dark">
         <Navbar.Brand href="#home">Google Books Search</Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
               <Nav.Link
                  eventKey="saved"
                  href="/saved"
                  // active={window.location.pathname === "/saved"} // <-- the react-bootstrap way of setting active nav item
                  className={window.location.pathname === "/saved" ? "active font-weight-bold" : ""}
               >Saved</Nav.Link>
               <Nav.Link
                  eventKey="search"
                  href="/search"
                  className={window.location.pathname === "/search" ? "active font-weight-bold" : ""}
               >Search</Nav.Link>
            </Nav>
         </Navbar.Collapse>
        
      </Navbar>
   );
}

export default BooksNavbar;