import { Card, Row, Col } from 'react-bootstrap';
import React, { Component } from 'react';

const CardContent = ({ items }) => {
    let num = items.price

    return (
        <Col sm={4}>
        <Card style={{ width: '18rem' }}>
            <p>{items.id}  </p>
            <p>{items.name} </p>
            <p>{num.toFixed(2)} </p>
            <p> Quantity: {items.quantity}</p>
        </Card>

        </Col>
    )
}

class CardItem extends Component {
    static defaultProps = {
        items: [
            {
                "id": 1,
                "name": "Snickers",
                "price": 1.5,
                "quantity": 10
            },
            {
                "id": 42,
                "name": "M&M's",
                "price": 1.25,
                "quantity": 8
            },
            {
                "id": 33,
                "name": "Almond Joy",
                "price": 1.25,
                "quantity": 11
            },
            {
                "id": 74,
                "name": "Milky Way",
                "price": 1.65,
                "quantity": 3
            },
            {
                "id": 5,
                "name": "Payday",
                "price": 1.75,
                "quantity": 2
            },
            {
                "id": 16,
                "name": "Reese's",
                "price": 1.5,
                "quantity": 5
            },
            {
                "id": 87,
                "name": "Pringles",
                "price": 2.35,
                "quantity": 4
            },
            {
                "id": 82,
                "name": "Cheez-Its",
                "price": 2,
                "quantity": 6
            },
            {
                "id": 9,
                "name": "Doritos",
                "price": 1.95,
                "quantity": 7
            }
        ]
    }

    render() {
        console.log("Rendering Card")
        console.log(this.props.items)

        return (
            <div>
                <Row>
                    {this.props.items.map((items, i) => {
                        return (
                            <CardContent items={items} key={i} sel={this.props.handleClick} />
                        )
                    })}
                </Row>
            </div>)

    }
}
export default CardItem;


//  <Card style={{width: '18rem', }}>
//     <Card.Header> {id} </Card.Header>
//     <ListGroup className="list-group-flush">
//         <ListGroup.Item>{name}</ListGroup.Item>
//         <ListGroup.Item> '$' + { formatToCurrency(price) }</ListGroup.Item>
//         <ListGroup.Item> 'Quantity left:' + { quantity}</ListGroup.Item>

//     </ListGroup>
// </Card>




