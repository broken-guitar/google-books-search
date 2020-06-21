import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import BooksNavbar from "./components/BooksNavbar/BooksNavbar";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";

import "./App.css"

// import Books from "./pages/Books";
// import Nav from "./components/Nav";



class App extends Component {
 
   render() {
      return (
         
            <Router>
                  <div className="body-div">
                     <BooksNavbar />
                     <Container>
                        <Row>
                            <Col >
                                <Switch>
                                    <Route exact path="/"        component={Saved} />
                                    <Route exact path="/saved"   component={Saved} />
                                    <Route exact path="/search"  component={Search} />
                                    <Route component={NoMatch} />
                              </Switch>
                           </Col>
                        </Row>
                     </Container>
                  </div>
            </Router>
      );
   }
}
export default App;
