import React, { Component } from "react";
import "./style.css";

import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { render } from "react-dom";

// class  SearchResults extends Component {

function SearchResults(props) {
   
   const handleSaveBook = book => {
      console.log(book.volumeInfo.title);
   }
  
   // render () {
   return (
      <div >
          {/* {this.props.results.length ? ( */}
      {props.results.length ? (
         <ul className="list-group search-results">
            {props.results.map(book => ( // this.props...
               <li key={book.id} className="list-group-item">
                  {/* <Container className="search-results-container"> */}
                     <Row className="my-2">
                        <Col xs="4" sm="2">
                           {book.volumeInfo.imageLinks.thumbnail
                              ? <Image src={book.volumeInfo.imageLinks.thumbnail}/>
                              : <Image src="https://via.placeholder.com/128x206"/>
                           }
                           
                        </Col>
                        <Col xs="8" sm="10">
                        <div className="float-right btn-grp">
                           <Button variant="outline-success" className="save-btn mr-1"
                              onClick={() => handleSaveBook(book)}
                              >Save</Button>
                           <Button variant="outline-primary" className="save-btn"
                              href={book.volumeInfo.infoLink}
                              >View</Button>
                        </div>
                        
                           <h3>{book.volumeInfo.title}</h3>
                           {book.volumeInfo.subtitle
                              ? <h5 className="font-italic">{book.volumeInfo.subtitle}</h5>
                              : ""}
                           <p>Author(s): {book.volumeInfo.authors.join(", ")}</p>
                           <p className="book-description">{book.volumeInfo.description}</p>
                           
                        </Col>
                     </Row>
                  {/* </Container> */}
               </li>
            ))}
         </ul>
      )
      :
         (<h3 className="ml-3"> No books found :(</h3>
      )}
      </div>
   );
}
// }
export default SearchResults;