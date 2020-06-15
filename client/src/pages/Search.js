import React, { Component } from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap"

import SearchForm from "../components/SearchForm/SearchForm";
import API from "../utils/API";

export default class Search extends Component {
    state = {
        search: "",
        books: [],
        results: [],
        error: ""
    };

    handleFormSubmit = event => {
       event.preventDefault();
       API.getBook(this.state.search)
         .then(res => {
            if (res.data.status === "error") {
               throw new Error(res.data.message);
            }
            this.setState({ results: res.data.message, error: ""});
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
                        <SearchForm>
                           handleFormSubmit={this.handleFormSubmit}
                        </SearchForm>
                    </Col>
                </Row>
            </Container>
        );
    }

}

