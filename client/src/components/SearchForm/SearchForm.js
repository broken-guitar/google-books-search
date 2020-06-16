import React from "react";
import { Form, Button } from "react-bootstrap";
import "./style.css";

// use datalist element to create autofill suggestions based on props.breeds array

function SearchForm(props) {
    
   return (

        <Form>
            <Form.Group>
                <Form.Label htmlFor="book-search">Search</Form.Label>
                <Form.Control
                    id= "book-search"
                    name="book-input"
                    type="text"
                    value={props.search}
                    placeholder="Search by book title"
                    onChange={props.handleInputChange}
                    size="lg"
                />
                <Button
                    type="submit"
                    onClick={props.handleFormSubmit}
                >Search
                </Button>
            </Form.Group>
        </Form>
    //   <form className="search">
    //      <div className="form-group">
    //         <label htmlFor="book-search">Book name:</label>
    //         <input
    //            type="text"
    //            value={props.search}
    //            onChange={props.handleInputChange}
    //            name="book"
    //            list="books"
    //            className="form-control"
    //            placeholder="Type in a book name"
    //            id="book-search"
    //         />
    //         <datalist id="books">
    //            {props.books.map(book => (
    //               <option value={book} key={book} />
    //            ))}
    //         </datalist>
    //         <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">Search</button>
    //      </div>
    //   </form>
   );
}

export default SearchForm;