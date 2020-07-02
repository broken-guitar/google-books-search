import React from "react";
import "./style.css";

import { Container, Row, Col, Image, Button } from "react-bootstrap";

import FlipMove from "react-flip-move";

import { API } from "../../utils/clientAPI";

// class  SearchResults extends Component {
    
function BookList(props) {

    // const [books, setBookSaved] = useState(false);
   
    const handleSaveBook = book => { 
        
        // check if book has already been saved (only checks by UI state)
        // *** TODO *** make a check by db 
        if (!book.saved) {
            // save book to database
            API.saveBook(book)
            .then(res => {
                props.updateSearchResults(book);
            })
            .catch(err => console.log(err));
        }
    };
    
    const handleRemoveBook = id => {
        console.log("book._id: ", id);
        API.deleteSavedBook(id)
            .then(res =>  {
                props.loadSavedBooks();
                console.log("props._id, id: ", props._id, id);
            })
            .catch(err => console.log(err));
    };
    

   return (
      
      <div >
      
      {props.books.length && props.status == "OK" ? (
         
         <ul className="list-group search-results">
            {/* <FlipMove> */}
            {props.books.map(book => ( 
                <li key={book._id ? book._id : book.id} className="list-group-item">
                    
                        <Row className="my-2">
                            
                            <Col xs="4" sm="2">
                                <Image src={book.image}/>
                            </Col>
                            
                            <Col xs="8" sm="10">
                            {/* group buttons in div to float group but control spacing between buttons*/}
                            <div className="float-right btn-grp">
                                {/*   render Save or Remove (book) button depending on existence of db id
                                        to indicate whether book has been saved or not */}
                                {!book._id || book.saved
                                    ?  <Button
                                        variant={book.saved ? "success" : "outline-success"} className="save-btn mr-1"
                                        onClick={() => handleSaveBook(book)}
                                        >
                                        {book.saved ? "Saved" : "Save"}
                                        </Button>
                                    :  <Button
                                        variant="outline-danger" className="save-btn mr-1"
                                        onClick={() => handleRemoveBook(book._id)}
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
                    
                </li>

            ))}
            {/* </FlipMove> */}
         </ul>
      )
      :
         (<h3 className="ml-3 leads">{props.search !== "" && props.status == "nodata" ? <i>{props.search}</i> : "No Results"}</h3>
      )}
      </div>
   );
}
// }
export default BookList;