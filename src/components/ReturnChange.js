import React from 'react';
import {Form, Row, Button, } from 'react-bootstrap';

class ReturnChange extends React.Component {

    render(){
    return (
        <div id="changeContainer" className="container">
        <Form>
                <div>
                    <h3> Change </h3>
                    <Form.Group>
                        {/* a bootstrap thing */}
                        <Form.Control as="input" id="change" readOnly value={this.props.returnChangeMessage}/>
                    </Form.Group>
                </div>
    
                <Row className="text-center">
                        <Button type="button" id="makePurchaseBtn" className="btn-secondary" onClick={this.props.returnChange}>Return Change </Button>
                </Row>
            </Form>

      </div>
    );

    }
}
export default ReturnChange;