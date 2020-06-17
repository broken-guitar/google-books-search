import React, { Component } from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap"

import SearchForm from "../components/SearchForm/SearchForm";
import SearchResults from "../components/BookList/BookList";
import { API } from "../utils/clientAPI";

class Search extends Component {
    state = {
        search: "",
        books: [],
        searchResults: [],
        error: ""
    };

    handleBookData = bookData => {
        //   make a db book model object
          let book = {
              title:          bookData.volumeInfo.title,
              authors:        bookData.volumeInfo.authors,
              description:    bookData.volumeInfo.description,
              image:          bookData.volumeInfo.imageLinks.thumbnail || "",
              link:           bookData.volumeInfo.infoLink    
          };
          return book;
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
            
            let books = res.data.items.map(bookData => this.handleBookData(bookData));

            this.setState({ searchResults: books, error: "", search: ""});
         })
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
                        <SearchResults books={this.state.searchResults} />
                     </Col>
                  </Row>
               </Container>
            </div>
        );
    }

}

export default Search;