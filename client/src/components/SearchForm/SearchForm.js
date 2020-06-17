import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./style.css";

// use datalist element to create autofill suggestions based on props.breeds array

function SearchForm(props) {
    
   return (

        <Form >
            <Form.Row>
               <Col xs="9" sm="10">
                {/* <Form.Label htmlFor="book-search">Search</Form.Label> */}
                <Form.Control
                    id= "book-search"
                    name="book-input"
                    type="text"
                    value={props.search}
                    placeholder="Search by book title"
                    onChange={props.handleInputChange}
                    size="lg"
                />
                </Col>
                <Col xs="3" sm="2">
                <Button
                    type="submit"
                    size="lg"
                    onClick={props.handleFormSubmit}
                >Search
                </Button>
                </Col>
            </Form.Row>
        </Form>
   );
}

export default SearchForm;