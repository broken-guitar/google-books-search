import React, { Component } from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap"

import SearchForm from "../components/SearchForm/SearchForm";
import SearchResults from "../components/SearchResults/SearchResults";
import API from "../utils/API";

class Search extends Component {
    state = {
        search: "",
        books: [],
        results: [],
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
            console.log("books response: ", res.data);
            // this.setState({ results: res.data.message, error: ""});
         })
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <Jumbotron>
                            <h1>Search 1</h1>
                        </Jumbotron>
                        <SearchForm
                            books={this.state.books}
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                        />
                        <SearchResults results={this.state.results} />
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default Search;