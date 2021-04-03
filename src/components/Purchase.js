import React from 'react';
import { Form, Row, Button } from 'react-bootstrap';


class Purchase extends React.Component {

    render() {

        return (
            <div id="messageContainer" className="container">
                <Form>
                    <div>
                        <h3> Message </h3>
                        <Form.Group>
                            {/* a bootstrap thing */}
                            <Form.Control as="input" id="message" readOnly value={this.props.message} />
                        </Form.Group>
                    </div>
                    <div>
                        <h5> Item: </h5>
                        <Form.Group>
                            {/* a bootstrap thing */}
                            <Form.Control as="input" id="item" readOnly value={this.props.itemId} />
                        </Form.Group>
                    </div>

                    <Row className="text-center">
                        <Button type="button" id="makePurchaseBtn" className="btn-secondary" onClick={this.props.makePurchase}>Make Purchase </Button>
                    </Row>
                </Form>

            </div>
        )
    }
}
export default Purchase;