import React, { Component } from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap"

import SearchForm from "../components/SearchForm/SearchForm";
import SearchResults from "../components/SearchResults/SearchResults";
import { API } from "../utils/clientAPI";

class Search extends Component {
    state = {
        search: "",
        books: [],
        searchResults: [],
        error: ""
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    }

    // search for book with Google Books API
    handleFormSubmit = event => {
       event.preventDefault();
       API.searchGoogleBooks(this.state.search)
         .then(res => {
            if (res.data.status === "error") {
               throw new Error(res.data.message);
            }
            console.log("books response: ", res.data.items);
            this.setState({ searchResults: res.data.items, error: "", search: ""});
         })
    }

    handleSaveBook = event => {
       event.preventDefault();

    }

    render() {
        return (
            <div>
               <Container fluid>
                  <Jumbotron className="text-center">
                     <h1>Google Books Search</h1>
                  </Jumbotron>
                  <Row>
                     <Col sm="12">                           
                        <SearchForm
                           search={this.state.search}
                           books={this.state.books}
                           handleInputChange={this.handleInputChange}
                           handleFormSubmit={this.handleFormSubmit}
                        />
                        <br></br>
                     </Col>
                     <Col sm="12">
                        <SearchResults results={this.state.searchResults} />
                     </Col>
                  </Row>
               </Container>
            </div>
        );
    }

}

export default Search;