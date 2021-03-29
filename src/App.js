import './App.css';
import AddMoney from './components/AddMoney';
import Purchase from './components/Purchase';
import ReturnChange from './components/ReturnChange';
import './css/style.css';
import { Container, Row, Col }  from 'react-bootstrap';
import Card from './components/Card';
import React, {Component} from 'react';


const SERVICE_URL = "https://tsg-vending.herokuapp.com";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      itemData: [
        {
          "id": 1, 
          "name": "Snickers", 
          "price": 1.5, 
          "quantity": 10 
        }]
    };
  }

  loadItemData() {
    this.setState({ loading: true })
    console.log("Loading item data")
    fetch(SERVICE_URL + "/items")
      .then(data => data.json())
      .then(data => this.setState(
        { itemData: data, loading: false }
      ))
  }
  componentDidMount() {
    console.log("App is now mounted.")
    this.loadItemData();
  }

render() {

  return (
    <div className="App">

      <Container fluid>
        <Row>
          <Col>Vending Machine </Col>
          </Row>
        <Row>
          <Col sm={9}> 
          <Card items={this.state.itemData} />

          </Col>

          <Col sm={3}>
      <AddMoney />


      <Purchase />


      <ReturnChange />
      
      </Col>


      </Row>
      </Container>

    </div>
  );
}
}
export default App;
