import axios from "axios";


export default {

    
  searchGoogleBooks: function(query) {
    const BASEURL = "https://www.googleapis.com/books/v1/volumes";
    const APIKEY = "AIzaSyDelCyGPERUd7VQLmWqucLtxHxFBmAD-Y8";
    let apiUrl = BASEURL + "?q=" + query // + "&key=" + APIKEY 
    return axios.get(apiUrl)      
  },  
  // return all saved books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // save a book to the database
  saveBook: function(id) {
    return axios.post("/api/books/" + id);
  },
  // delete a book from the database by Mongo _id
  deleteSavedBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // will load single HTML page in client/build/index.html
  default: function(bookData) {
    return axios.post("*", bookData);
  }
};
