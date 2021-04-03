import React from 'react';
import { Form, Row, Button, Col } from 'react-bootstrap';


class AddMoney extends React.Component {
    render() {
        let { addTotalMoney } = this.props

        return (
            <div id="totalContainer" className="container">
                <Form>
                    <div>
                        <h3> Total $ In </h3>
                        <Form.Group>
                            {/* a bootstrap thing */}
                            <Form.Control as="input" id="moneyInput" readOnly value={this.props.addMoneyData} />
                        </Form.Group>
                    </div>
                    {/* row for quarter and dollar */}
                    <Row className="text-center">
                        <Col>
                            <Button type="button" id="addDollarButton" className="btn-secondary" onClick={addTotalMoney} value="1.00" >Add Dollar </Button>
                        </Col>
                        <Col>
                            <Button type="button" id="addQuarterButton" className="btn-secondary" onClick={addTotalMoney} value="0.25" >Add Quarter </Button>
                        </Col>
                    </Row>
                    &nbsp;
                    {/* row for dime and nickel */}
                    <Row className="text-center">
                        <Col>
                            <Button type="button" id="addDimeButton" className="btn-secondary" onClick={addTotalMoney} value="0.10" >Add Dime </Button>
                        </Col>
                        <Col>
                            <Button type="button" id="addNickelButton" className="btn-secondary" onClick={addTotalMoney} value="0.05" >Add Nickel </Button>
                        </Col>
                    </Row>
                </Form>
                &nbsp;
            </div>

        );
    }
}
export default AddMoney;