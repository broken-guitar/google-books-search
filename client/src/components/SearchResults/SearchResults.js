import React from "react";
import "./style.css";

function SearchResults(props) {
   return (
      <ul className="list-group search-results">
         {props.results.map(result => (
            <li key={result} className="list-group-item">
               {/* <img alt="" src={result} className="img-fluid" /> */}
                {/* book data here */}
            </li>
         ))}
      </ul>
   );
}

export default SearchResults;