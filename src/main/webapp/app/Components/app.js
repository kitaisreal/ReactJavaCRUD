import React from "react";
import 'whatwg-fetch'
import { Navbar, NavItem, Nav, Grid, Row, Col ,FormControl ,Tooltip, Popover, Modal, Button, OverlayTrigger} from "react-bootstrap";
import CreateItemDialog from './createItemDialog.js';
import CreateCustomerDialog from './createCustomerDialog.js';
import ItemList from './itemList'
import CustomerList from './customerList'
import Client from '../client'
import {connect} from 'react-redux'
class App extends React.Component {
    constructor(props) {
        super(props);
        Client.letsCheck();
        this.state = {items: [], customers: [], attributesCustomer:["customerFirstName", "customerLastName"]};
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
        Client.deleteItem(item);
    }
    onDeleteCustomer(customer){
        Client.deleteCustomer(customer);
    }
    onCreateItem(item){
        Client.createItem(item)
    }
    onCreateCustomer(customer){
        console.log("STATE ITEMS " + this.state.customers)
        console.log("STORE ITEMS " + this.props.customers);
        Client.createCustomer(customer)

    }
    onUpdateItem(item){
        Client.updateItem(item);
    }
    onUpdateCustomer(customer){
        Client.updateCustomer(customer)

    }
    componentDidMount() {
        this.loadItemsFromServer();
        this.loadCustomersFromServer();
    }
    loadItemsFromServer(){
        fetch('api/items').then(response => response.json()).then(response=>{this.setState({
            items:response.items
        })}).catch(function(data,status,er){console.log("Error" +data + " statud: "+ status + " er: " + er)});

    }
    loadCustomersFromServer(){
        fetch('api/customers').then(response => response.json()).then(response=>{this.setState({
            customers:response.customers
        })}).catch(function(data,status,er){console.log("Error" +data + " statud: "+ status + " er: " + er)});
    }
    render() {
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
const mapStateToProps = (state)=>{
    return {
        attributesItem:state.attributesItem,
        customers:state.customers
    }
}
export default connect(mapStateToProps)(App)