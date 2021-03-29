import React from 'react';
import {Form, Row, Button, } from 'react-bootstrap';


export default function ReturnChange() {
    return (
        <div id="changeContainer" className="container">
        <Form>
                <div>
                    <h3> Change </h3>
                    <Form.Group>
                        {/* a bootstrap thing */}
                        <Form.Control as="input" id="change" readOnly />
                    </Form.Group>
                </div>
    
                <Row className="text-center">
                        <Button type="button" id="makePurchaseBtn" className="btn-info">Return Change </Button>
                </Row>
            </Form>

      </div>
    );
}