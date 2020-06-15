import React, { Component } from "react";
import { Col, Row, Container } from  "../components/Grid";
import Jumbotron from "../components/Jumbotron";

export default class Search extends Component {
    state = {
        something: []
    };

    render() {
        return (
            <Component fluid>
                <Row>
                    <Col>
                        <Jumbotron>
                            <h1>Header 1</h1>
                        </Jumbotron>
                        
                    </Col>
                </Row>
            </Component>
        );
    }

}

