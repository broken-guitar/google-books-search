import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar } from "react-bootstrap";


// import Books from "./pages/Books";
// import Nav from "./components/Nav";

import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
   
  return (
   
        <Router>
            <div>
                <Navbar />
                <Route path="/" exact component={Saved} />
                <Route path="/saved" exact component={Saved} />
                <Route path="/search" exact component={Search} />
            </div>
        </Router>
  );
}

export default App;
