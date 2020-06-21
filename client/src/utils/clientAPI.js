import axios from "axios";

export const API = {

   // SEARCH google books api
   searchGoogleBooks: (query) => {
      const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";  // google books api search query path
   
      let apiURL = BASEURL + query  // concatenate path and query
    // send the query to google books api
      return axios.get(apiURL);
  },

   // GET all saved books from db
   getSavedBooks: () => axios.get("/api/books"),
  

   // CREATE a book in the db
   saveBook: (book) => axios.post("/api/books/", book),
  

   // DELETE a book from the db by its mongodb _id
   deleteSavedBook: (id) => axios.delete("/api/books/" + id),

};
