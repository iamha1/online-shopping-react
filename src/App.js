import './App.css';
import AddMoney from './components/AddMoney';
import Purchase from './components/Purchase';
import ReturnChange from './components/ReturnChange';
import './css/style.css';
import { Container, Row, Col } from 'react-bootstrap';
import Card from './components/Card';
import React, { Component } from 'react';

const SERVICE_URL = "https://tsg-vending.herokuapp.com";


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,

      addMoneyData: '0.00',

      itemId: " ",

      message: " ",

      returnChangeMessage: " ",

      itemData: [
        {
          "id": 1,
          "name": "Snickers",
          "price": 1.5,
          "quantity": 10
        }]
    };

    this.addTotalMoney = this.addTotalMoney.bind(this);
    this.selectingItem = this.selectingItem.bind(this);
    this.makePurchase = this.makePurchase.bind(this);
    this.returnChange = this.returnChange.bind(this);

  }

  loadItemData() {
    this.setState({ loading: true })
    console.log("Now Loading Items")
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

  addTotalMoney(event) {
    let totalMoney = (parseFloat(this.state.addMoneyData) + parseFloat(event.target.value)).toFixed(2);
    this.setState({ addMoneyData: totalMoney })
  }

  selectingItem(event) {
    this.setState({ itemId: event.target.value, message: " " })
  }

  makePurchase() {
    this.setState({ loading: true, returnChangeMessage: "" })
    fetch(SERVICE_URL + "/money/" + this.state.addMoneyData + "/item/" + this.state.itemId, {
      method: "POST"
    })
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
            // Make Purchase
            var quarters = data.quarters;
            var dimes = data.dimes;
            var nickels = data.nickels;
            var pennies = data.pennies;

            let change = " ";

            if (quarters) {
              if (quarters == 1){
                change += quarters + " quarter."
              } else{
              change += quarters + " quarters."
            }
          }
            if (dimes) {
              if (dimes == 1){
              change += dimes + " dime."
              } else{
              change += dimes + " dimes."
            }
          }

            if (nickels) {
              if(nickels == 1){
              change += nickels + " nickel."
              } else{
              change += nickels + " nickels."
            }
          }

            if (pennies) {
              if(pennies == 1){
                change += pennies + " penny."
              } else {
              change += pennies + " pennies."
            }
          }

          this.setState({ returnChangeMessage: change, message: "Thank you!", addMoneyData: "0.00" })
          this.loadItemData();
          })
        }
        else {
          response.json().then(data => {
            this.setState({ message: data.message })
            this.loadItemData()
          })
        }
      })
    }
// return change function
    returnChange() {

      let total = parseFloat(this.state.addMoneyData) * 100;
       
        var quarter = 0;
        var dime = 0;
        var nickel = 0;
        var penny = 0;

        if ((parseFloat(total) / 25) > 0){
            quarter = Math.floor(total/25);  
            total -= (parseFloat(quarter) * 25); 
        }

        if ((parseFloat(total) / 10) > 0) {
            dime = Math.floor(total / 10); 
            total -= (parseFloat(dime) * 10);
        }

        if ((parseFloat(total) / 5) > 0) {
            nickel = Math.floor(total / 5);
            total -=  (parseFloat(nickel) * 5);
        }
            
        if ((parseFloat(total) / 1) > 0) {
            penny = Math.floor(total);   
            total -= parseFloat(penny); 
        }
       
        this.setState({addMoneyData: "0.00"})

        let change = " ";

        if (quarter) {
          if(quarter = 1){
            change += quarter + " quarter."
          } else{
          change += quarter + " quarters."
        }
      }
        if (dime) {
          if(dime = 1){
            change += dime + " dime."
          } else{
          change += dime + " dimes."
        }
      }

        if (nickel) {
          if(nickel = 1){
            change += nickel + " nickel."
          } else{
          change += nickel + " nickels."
        }
      }


        if (penny) {
          if(penny = 1){
            change += penny + " penny."
          } else{
          change += penny + " pennies."
        }
      }
      this.setState({ returnChangeMessage: change, message: " ", itemId: " " })

        
    }

  render() {

    return (
      <div className="App">

        <Container fluid>
          <div>
            <Row>
              <Col><h1>Online Store</h1> </Col>
            </Row>
            <Row>
              <hr/>
            </Row>
          </div>

          <Row>
            <Col sm={9}>
              <Card items={this.state.itemData}
                selectingItem={this.selectingItem}
              />

            </Col>

            <Col sm={3}>
              <div>
                <AddMoney addMoneyData={this.state.addMoneyData}
                  addTotalMoney={this.addTotalMoney}
                />

              </div>
              <div>
                <Purchase itemId={this.state.itemId}
                  message={this.state.message}
                  makePurchase={this.makePurchase}
                  
                />
                <Row>
              <hr/>
            </Row>

              </div>
              <div>
                <ReturnChange returnChangeMessage={this.state.returnChangeMessage}
                              returnChange={this.returnChange}
                />
              </div>
            </Col>


          </Row>
        </Container>

      </div>
    );
  }
}
export default App;
