import React, { Component } from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap"

import BookList from "../components/BookList/BookList";

import { API } from "../utils/clientAPI";

export default class Saved extends Component { // <-- a way to export default when defining
   state = {
      savedBooks: []
   };

   componentDidMount() {
      this.loadSavedBooks();
   };

   loadSavedBooks = () => {
      API.getSavedBooks()
         .then(res => {
            this.setState({ savedBooks: res.data });
         })
         .catch(err => console.log(err));
   };

   render() {
        return (
         <div>
         <Container fluid>
            <Jumbotron className="text-center">
               <h1>Saved Books</h1>
            </Jumbotron>
            <Row>
               <Col sm="12">
                    <BookList
                        books={this.state.savedBooks}
                        loadSavedBooks={this.loadSavedBooks}
                    />
               </Col>
            </Row>
         </Container>
      </div>

        );
    }
}

