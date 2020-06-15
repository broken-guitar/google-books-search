import React from "react";
import "./style.css";

// use datalist element to create autofill suggestions based on props.breeds array

function SearchForm(props) {
   return (
      <form className="search">
         <div className="form-group">
            <label htmlFor="book-search">Book name:</label>
            <input
               type="text"
               value={props.search}
               onChange={props.handleInputChange}
               name="book"
               list="books"
               className="form-control"
               placeholder="Type in a book name"
               id="book-search"
            />
            <datalist id="books">
               {props.books.map(book => (
                  <option value={book} key={book} />
               ))}
            </datalist>
            <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">Search</button>
         </div>
      </form>
   );
}

export default SearchForm;