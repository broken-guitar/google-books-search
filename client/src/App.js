import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import BooksNavbar from "./components/BooksNavbar";
import "./App.css"

// import Books from "./pages/Books";
// import Nav from "./components/Nav";

import Search from "./pages/Search";
import Saved from "./pages/Saved";

class App extends Component {
 
   render() {
      return (
         
            <Router>
                  <div className="body-div">
                     <BooksNavbar />
                     <Container>
                        <Row>
                           <Col >
                           <Route path="/" exact component={Saved} />
                           <Route path="/saved" exact component={Saved} />
                           <Route path="/search" exact component={Search} />
                           </Col>
                        </Row>
                     </Container>
                  </div>
            </Router>
      );
   }
}
export default App;
