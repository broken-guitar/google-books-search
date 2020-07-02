import React, { Component } from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap"

import SearchForm from "../components/SearchForm/SearchForm";
import BookList from "../components/BookList/BookList";
import { API } from "../utils/clientAPI";

class Search extends Component {
    state = {
        searchTerm: "",
        searchResults: [],
        error: ""
    };
    // this method updates the search bar (otherwise typing in the search bar will appear not to work)
    handleInputChange = event => {
        this.setState({ searchTerm: event.target.value });
    }

    // search for book with Google Books API
    handleFormSubmit = event => {
        event.preventDefault(); // prevent the page from refreshing when Search button is clicked
        
        // send user's search term to the Google Books API (refer to src/utils/clientAPI.js)
        API.searchGoogleBooks(this.state.searchTerm)
          .then(res => {
             if (res.data.status === "error") {
                throw new Error(res.data.message);
             }
             // check if search results is empty (undefined)
             if (typeof res.data.items !== "undefined") {
                let books = res.data.items.map(bookData => this.handleBookData(bookData));
                this.setState({ searchResults: books, error: "OK", searchTerm: ""});
             } else {
                 // result data is "undefined", set results state to empty array
                 this.setState({ searchResults: [], error: "nodata", searchTerm: ""});
             }
             
          });
     }
    
    // prepare api data into Book model format 
    handleBookData = bookData => {
        let authors     =   Array.isArray(bookData.volumeInfo.authors)
                            ?   bookData.volumeInfo.authors
                            :   ["N/A"];
        let image       =   (typeof bookData.volumeInfo.imageLinks === "undefined")
                            ?   "https://via.placeholder.com/128x206"
                            :   bookData.volumeInfo.imageLinks.thumbnail;
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

    // adds "saved" boolean to books saved by user;
    // update state to rerender BookList with "Saved" button text when book.saved === true;
    updateSearchResults = (book) => {
        
        let newResults = this.state.searchResults; // clone state bc we don't want to modify directly
        
        newResults.find(o => o.id === book.id).saved = true; // find the book and add the saved boolean
        
        this.setState({
            searchResults: newResults // update searchResults with the modified clone array
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
                           search               = {this.state.searchTerm}
                           handleInputChange    = {this.handleInputChange}
                           handleFormSubmit     = {this.handleFormSubmit}
                        />
                        <br></br>
                     </Col>
                     
                     <Col sm="12">
                        <BookList
                            status              = {this.state.error} 
                            search              = {this.state.searchTerm}
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