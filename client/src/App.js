import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Books from "./pages/Books";
import Nav from "./components/Nav";

function App() {
  return (

    <Router>
        <div>
            <Navbar />
        </div>
    </Router>

    <div>
      <Nav />
      <Books />
    </div>
  );
}

export default App;
