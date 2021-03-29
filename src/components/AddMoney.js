import React from 'react';
import {Form, Row, Button, Col } from 'react-bootstrap';


export default function AddMoney() {
    return (
        <div id="totalContainer" className="container">
          <Form>
        <div>
        <h3> Total $ In </h3>
        <Form.Group>
            {/* a bootstrap thing */}
        <Form.Control as="input" id="moneyInput" readOnly />
        </Form.Group>
        </div>
        <Row className="text-center">
        <Col>
        <Button variant="secondary" type="button" id="addDollarButton" className="btn-info">Add Dollar </Button>
        </Col>
        <Col>
        <Button variant="secondary" type="button" id="addQuarterButton" className="btn-info">Add Quarter </Button>
        </Col>


        </Row>
        <Row className="text-center">
        <Col>
        <Button variant="secondary" type="button" id="addDimeButton" className="btn-info">Add Dime </Button>
        </Col>
        <Col>
        <Button variant="secondary" type="button" id="addNickelButton" className="btn-info">Add Nickel </Button>
        </Col>


        </Row>
            </Form>

        </div>
     );
     }
