import React, { Component } from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap"

import SearchForm from "../components/SearchForm/SearchForm";
import BookList from "../components/BookList/BookList";
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
        let authors     =   bookData.volumeInfo.authors || "N/A";
        let image       =   bookData.volumeInfo.imageLinks === "undefined"
                                ? "https://via.placeholder.com/128x206"
                                : bookData.volumeInfo.imageLinks.thumbnail;
                
        let book = {
            id:             bookData.id,
            title:          bookData.volumeInfo.title,
            authors:        authors,
            description:    bookData.volumeInfo.description,
            image:          image,
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
            console.log("res.data.items: ", res.data.items);
            let books = res.data.items.map(bookData => this.handleBookData(bookData));

            this.setState({ searchResults: books, error: "", search: ""});
         })
    }

    updateSearchResults = (book) => {
        let newResults = this.state.searchResults;
        
        newResults.find(o => o.id === book.id).saved = true;
        
        this.setState({
            searchResults: newResults
        });
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
                           search               = {this.state.search}
                           handleInputChange    = {this.handleInputChange}
                           handleFormSubmit     = {this.handleFormSubmit}
                        />
                        <br></br>
                     </Col>
                     
                     <Col sm="12">
                        <BookList
                            books               = {this.state.searchResults}
                            updateSearchResults = {this.updateSearchResults}
                        />
                     </Col>
                  </Row>
               </Container>
            </div>
        );
    }

}

export default Search;