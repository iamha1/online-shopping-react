import React from 'react';

export default function Purchase() {
    return (
        <div id="messageContainer" className="container">
            <Form>
                <div>
                    <h3> Message </h3>
                    <Form.Group>
                        {/* a bootstrap thing */}
                        <Form.Control as="input" id="message" readOnly />
                    </Form.Group>
                </div>
                
                <div>
                    <h5> Item: </h5>
                    <Form.Group>
                        {/* a bootstrap thing */}
                        <Form.Control as="input" id="item" readOnly />
                    </Form.Group>
                </div>

                <Row className="text-center">
                        <Button type="button" id="makePurchaseBtn" className="btn-info">Make Purchase </Button>
                </Row>
            </Form>

        </div>

    )
}
