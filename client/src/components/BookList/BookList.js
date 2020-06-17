import React, { Component } from "react";
import "./style.css";

import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { render } from "react-dom";

import { API } from "../../utils/clientAPI";

// class  SearchResults extends Component {

function BookList(props) {
   
    const handleSaveBook = book => {
      
      
        // send book to server
      API.saveBook(book)
         .then  (res  =>  console.log(res))
         .catch (err  =>  console.log(err))
    };
  
   // render () {
   return (
      <div >
          {/* {this.props.results.length ? ( */}
      {props.books.length ? (
         <ul className="list-group search-results">
            {props.books.map(book => ( // this.props...
               <li key={book.id} className="list-group-item">
                  {/* <Container className="search-results-container"> */}
                     <Row className="my-2">
                        
                        <Col xs="4" sm="2">
                           {book.image
                              ? <Image src={book.image}/>
                              : <Image src="https://via.placeholder.com/128x206"/>
                           }
                           
                        </Col>
                        
                        <Col xs="8" sm="10">
                           {/* group buttons in div to float group but control spacing between buttons*/}
                           <div className="float-right btn-grp">
                              {/*   render Save or Remove (book) button depending on existence of db id
                                    to indicate whether book has been saved or not */}
                              {!props._id
                                 ?  <Button
                                       variant="outline-success" className="save-btn mr-1"
                                       onClick={() => handleSaveBook(book)}
                                    >Save</Button>
                                 :  <Button
                                       variant="outline-danger" className="save-btn mr-1"
                                       onClick={() => handleSaveBook(book)}
                                    >Remove</Button>
                              }     
                              <Button variant="outline-primary" className="save-btn"
                                 href={book.link}
                                 >View</Button>
                           </div>
                           
                              <h3>{book.title}</h3>
                              {/* {book.description
                                 ? <h5 className="font-italic">{book.volumeInfo.subtitle}</h5>
                                 : ""} */}
                              <p>Author(s): {book.authors.join(", ")}</p>
                              <p className="book-description">{book.description}</p>
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
export default BookList;