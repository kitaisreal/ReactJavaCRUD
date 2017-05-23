import React from "react";
import ReactDom from "react-dom";
import 'whatwg-fetch'
import { Navbar, NavItem, Nav, Grid, Row, Col ,FormControl ,Tooltip, Popover, Modal, Button, OverlayTrigger} from "react-bootstrap";

import CreateItemDialog from './createItemDialog.js';
import CreateCustomerDialog from './createCustomerDialog.js';
import ItemList from './itemList'
import CustomerList from './customerList'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [], customers: [], attributesItem:["itemName","brandName","ownerID","itemImageName"], attributesCustomer:["customerFirstName", "customerLastName"]};
        this.loadItemsFromServer = this.loadItemsFromServer.bind(this);
        this.loadCustomersFromServer = this.loadCustomersFromServer.bind(this);
        this.onDeleteItem = this.onDeleteItem.bind(this);
        this.onDeleteCustomer = this.onDeleteCustomer.bind(this);
        this.onCreateItem= this.onCreateItem.bind(this);
        this.onCreateCustomer = this.onCreateCustomer.bind(this);
        this.onUpdateItem = this.onUpdateItem.bind(this);
        this.onUpdateCustomer = this.onUpdateCustomer.bind(this);
    }

    onDeleteItem(item){
        fetch('/items/delete/' + item.itemID).then(this.loadItemsFromServer).
            catch(function(data,status,er){console.log("Error" +data + " statud: "+ status + " er: " + er)});
    }
    onDeleteCustomer(customer){
        fetch('customers/delete/'+customer.customerID).then(this.loadCustomersFromServer).
            catch(function(data,status,er){console.log("Error" +data + " statud: "+ status + " er: " + er)});
    }
    onCreateItem(item){
        let fetchData ={
            method:'POST',
            body:JSON.stringify(item)
        }
        fetch('items/add',fetchData).then(this.loadItemsFromServer).
            catch(function(data,status,er){console.log("Error" +data + " statud: "+ status + " er: " + er)});
    }
    onCreateCustomer(customer){
        let fetchData ={
            method:'POST',
            body:JSON.stringify(customer)
        }
        fetch('customers/add',fetchData).then(this.loadCustomersFromServer).
            catch(function(data,status,er){console.log("Error" +data + " statud: "+ status + " er: " + er)});

    }
    onUpdateItem(item){
        let fetchData ={
            method:'POST',
            body:JSON.stringify(item)
        }
        fetch('items/update',fetchData).then(this.loadItemsFromServer).
            catch(function(data,status,er){console.log("Error" +data + " statud: "+ status + " er: " + er)});
    }
    onUpdateCustomer(customer){
        let fetchData = {
            method:'POST',
            body:JSON.stringify(customer)
        }
        fetch('customers/update',fetchData).then(this.loadCustomersFromServer).
            catch(function(data,status,er){console.log("Error" +data + " statud: "+ status + " er: " + er)});

    }
    componentDidMount() {
        this.loadItemsFromServer();
        this.loadCustomersFromServer();
    }
    loadItemsFromServer(){
        fetch('/items').then(response => response.json()).then(response=>{this.setState({
            items:response.items
        })}).catch(function(data,status,er){console.log("Error" +data + " statud: "+ status + " er: " + er)});

    }
    loadCustomersFromServer(){
        fetch('/customers').then(response => response.json()).then(response=>{this.setState({
            customers:response.customers
        })}).catch(function(data,status,er){console.log("Error" +data + " statud: "+ status + " er: " + er)});
    }
    render() {
        console.log(this.state.items);
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            React Spring Simple App
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
                <Grid>
                    <Row>
                        <Col md={4} sm={4}>
                            <CreateItemDialog attributesItem = {this.state.attributesItem}
                                              onCreateItem = {this.onCreateItem}/>
                            <CreateCustomerDialog attributesCustomer = {this.state.attributesCustomer}
                                                  onCreateCustomer = {this.onCreateCustomer}/>
                        </Col>
                        <Col md={8} sm={8}>
                                <ItemList items={this.state.items}
                                          onDeleteItem = {this.onDeleteItem}
                                          onUpdateItem = {this.onUpdateItem}
                                          attributesItem = {this.state.attributesItem}/>
                                <CustomerList customers = {this.state.customers}
                                              onDeleteCustomer = {this.onDeleteCustomer}
                                              onUpdateCustomer = {this.onUpdateCustomer}
                                              attributesCustomer = {this.state.attributesCustomer}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

ReactDom.render(<App />, document.getElementById('app'));