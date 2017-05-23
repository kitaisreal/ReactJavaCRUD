import React from "react";
import ReactDom from "react-dom";
import $ from "jquery";
import { Navbar, NavItem, Nav, Grid, Row, Col ,FormControl ,Tooltip, Popover, Modal, Button, OverlayTrigger} from "react-bootstrap";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [], customers: [], attributesItem:["itemName","brandName","ownerID"], attributesCustomer:["customerFirstName", "customerLastName"]};
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
        $.ajax({
            url: '/items/delete/'+item.itemID,
            type: 'GET',
            success:(data) => {
                console.log("ITEM DELETED " + item.itemID + " " + item.itemName)
                this.loadItemsFromServer()
            },
            error:function(data,status,er) {
                alert("error: "+data+" status: "+status+" er:"+er);
            }
        });
    }
    onDeleteCustomer(customer){
        $.ajax({
            url: '/customers/delete/'+customer.customerID,
            type: 'GET',
            success:(data) => {
                console.log("CUSTOMER DELETED " + customer.customerFirstName + " " + customer.customerLastName)
                this.loadCustomersFromServer()
            },
            error:function(data,status,er) {
                alert("error: "+data+" status: "+status+" er:"+er);
            }
        });

    }
    onCreateItem(item){
        $.ajax({
            type : "POST",
            contentType:"application/json",
            url : "/items/add",
            data : JSON.stringify(item),
            success :(data)=>{
                this.loadItemsFromServer();
            },
            error:function(data,status,er) {
                alert("error: "+data+" status: "+status+" er:"+er);
            }
        });
    }
    onCreateCustomer(customer){
        $.ajax({
            type : "POST",
            contentType:"application/json",
            url : "/customers/add",
            data : JSON.stringify(customer),
            success :(data)=>{
                this.loadCustomersFromServer();
            },
            error:function(data,status,er) {
                alert("error: "+data+" status: "+status+" er:"+er);
            }
        });

    }
    onUpdateItem(item){
        $.ajax({
            type : "POST",
            contentType:"application/json",
            url : "/items/update",
            data : JSON.stringify(item),
            success :(data)=>{
                this.loadItemsFromServer();
            },
            error:function(data,status,er) {
                alert("error: "+data+" status: "+status+" er:"+er);
            }
        });
    }
    onUpdateCustomer(customer){
        $.ajax({
            type : "POST",
            contentType:"application/json",
            url : "/customers/update",
            data : JSON.stringify(customer),
            success :(data)=>{
                this.loadCustomersFromServer();
            },
            error:function(data,status,er) {
                alert("error: "+data+" status: "+status+" er:"+er);
            }
        });
    }
    componentDidMount() {
        this.loadItemsFromServer();
        this.loadCustomersFromServer();
    }
    loadItemsFromServer(){
        $.ajax({
            url: '/items',
            type: 'GET',
            dataType: 'json',
            contentType: 'application/json',
            mimeType: 'application/json',

            success:(data) => {
                this.setState({
                    items: data.items
                }, function () {
                    console.log("Items " + this.state.items)
                });
            },
            error:function(data,status,er) {
                alert("error: "+data+" status: "+status+" er:"+er);
            }
        });
    }
    loadCustomersFromServer(){
        $.ajax({
            url: '/customers',
            type: 'GET',
            dataType: 'json',
            contentType: 'application/json',
            mimeType: 'application/json',

            success:(data) => {
                this.setState({
                    customers: data.customers
                }, function () {
                    console.log("Customers " + this.state.customers)
                });
            },
            error:function(data,status,er) {
                alert("error: "+data+" status: "+status+" er:"+er);
            }
        });
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
                            <CreateItemDialog attributesItem = {this.state.attributesItem} onCreateItem = {this.onCreateItem}/>
                            <CreateCustomerDialog attributesCustomer = {this.state.attributesCustomer} onCreateCustomer = {this.onCreateCustomer}/>
                        </Col>
                        <Col md={8} sm={8}>
                                <ItemList items={this.state.items} onDeleteItem = {this.onDeleteItem} onUpdateItem = {this.onUpdateItem} attributesItem = {this.state.attributesItem}/>
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

class ItemList extends React.Component{
    render() {
        let items = this.props.items.map(item =>
            <Item key={item.itemID}item={item} onDeleteItem={this.props.onDeleteItem} onUpdateItem={this.props.onUpdateItem} attributesItem = {this.props.attributesItem} />
        );
        return (
            <div className="panel panel-default">
                <div className="panel-heading"><h3>Items Table</h3></div>
            <table className="table">
                <tbody>
                <tr>
                    <th>Item Name</th>
                    <th>Model Name</th>
                </tr>
                {items}
                </tbody>
            </table>
            </div>
        )
    }
}
class CustomerList extends React.Component{
    render(){
        let customers = this.props.customers.map(customer =>
            <Customer key = {customer.customerID} customer={customer} onDeleteCustomer = {this.props.onDeleteCustomer} onUpdateCustomer={this.props.onUpdateCustomer}
                      attributesCustomer = {this.props.attributesCustomer}
            />);
        return (
            <div className ="panel panel-default">
                <div className="panel-heading"><h3>Customer Table</h3></div>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Customer Firstname</th>
                            <th>Customer Lastname</th>
                        </tr>
                    {customers}
                    </tbody>
                </table>
            </div>
        )
    }
}

class Item extends React.Component{
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.onDeleteItem(this.props.item);
    }
    render() {
        return (
            <tr>
                <td>{this.props.item.itemName}</td>
                <td>{this.props.item.brandName}</td>
                <td>
                    <UpdateItemDialog item={this.props.item} attributesItem = {this.props.attributesItem} onUpdateItem = {this.props.onUpdateItem} />
                </td>
                <td>
                    <button onClick={this.handleDelete}>Delete</button>
                </td>
            </tr>
        )
    }
}
class Customer extends React.Component{
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete() {
        this.props.onDeleteCustomer(this.props.customer);
    }
    render(){
        return (
            <tr>
                <td>{this.props.customer.customerFirstName}</td>
                <td>{this.props.customer.customerLastName}</td>
                <td>
                    <UpdateCustomerDialog customer={this.props.customer} attributesCustomer = {this.props.attributesCustomer} onUpdateCustomer ={this.props.onUpdateCustomer}/>
                </td>
                <td>
                    <button onClick = {this.handleDelete}>Delete</button>
                </td>
            </tr>
        )
    }
}
class CreateItemDialog extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const newItem = {};
        this.props.attributesItem.forEach(attribute => {
            newItem[attribute] = ReactDom.findDOMNode(this.refs[attribute]).value.trim();
        });
        this.props.onCreateItem(newItem);
        this.props.attributesItem.forEach(attribute => {
            ReactDom.findDOMNode(this.refs[attribute]).value = '';
        });
        window.location = "#";
    }

    render() {
        const inputs = this.props.attributesItem.map(attribute =>
            <p key={attribute}>
                <input type="text" placeholder={attribute} ref={attribute} className="field"/>
            </p>
        );
        return (
            <div>
                <a href="#createItem">Create Item</a>

                <div id="createItem" className="modalDialog">
                    <div>
                        <a href="#" title="Close" className="close">X</a>

                        <h2>Create new item</h2>

                        <form>
                            {inputs}
                            <button onClick={this.handleSubmit}>Create</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
class CreateCustomerDialog extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const newCustomer = {};
        this.props.attributesCustomer.forEach(attribute => {
            newCustomer[attribute] = ReactDom.findDOMNode(this.refs[attribute]).value.trim();
        });
        this.props.onCreateCustomer(newCustomer);
        this.props.attributesCustomer.forEach(attribute => {
            ReactDom.findDOMNode(this.refs[attribute]).value = '';
        });
        window.location = "#";
    }

    render() {
        const inputs = this.props.attributesCustomer.map(attribute =>
            <p key={attribute}>
                <input type="text" placeholder={attribute} ref={attribute} className="field"/>
            </p>
        );
        return (
            <div>
                <a href="#createCustomer">Create Customer</a>

                <div id="createCustomer" className="modalDialog">
                    <div>
                        <a href="#" title="Close" className="close">X</a>

                        <h2>Create new customer</h2>

                        <form>
                            {inputs}
                            <button onClick={this.handleSubmit}>Create</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
class UpdateItemDialog extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const updatedItem = {};
        updatedItem["itemID"] = this.props.item["itemID"];
        this.props.attributesItem.forEach(attribute => {
            updatedItem[attribute] = ReactDom.findDOMNode(this.refs[attribute]).value.trim();
        });
        this.props.onUpdateItem(updatedItem);
        window.location = "#";
    }

    render() {
        const inputs = this.props.attributesItem.map(attribute =>
            <p key={attribute}>
                <input type="text" placeholder={attribute} defaultValue = {this.props.item[attribute]} ref={attribute} className="field"/>
            </p>
        );

        var dialogId = "updateItem " + this.props.item.itemID;

        return (
            <div>
                <a href={"#" + dialogId}>Update</a>

                <div id={dialogId} className="modalDialog">
                    <div>
                        <a href="#" title="Close" className="close">X</a>

                        <h2>Update Item</h2>

                        <form>
                            {inputs}
                            <button onClick={this.handleSubmit}>Update</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
class UpdateCustomerDialog extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const updatedCustomer = {};
        updatedCustomer["customerID"] = this.props.customer["customerID"];
        this.props.attributesCustomer.forEach(attribute => {
            updatedCustomer[attribute] = ReactDom.findDOMNode(this.refs[attribute]).value.trim();
        });
        this.props.onUpdateCustomer(updatedCustomer);
        window.location = "#";
    }

    render() {
        const inputs = this.props.attributesCustomer.map(attribute =>
            <p key={attribute}>
                <input type="text" placeholder={attribute} defaultValue = {this.props.customer[attribute]} ref={attribute} className="field"/>
            </p>
        );

        const dialogId = "updateCustomer " + this.props.customer.customerID;

        return (
            <div>
                <a href={"#" + dialogId}>Update</a>

                <div id={dialogId} className="modalDialog">
                    <div>
                        <a href="#" title="Close" className="close">X</a>

                        <h2>Update Customer</h2>

                        <form>
                            {inputs}
                            <button onClick={this.handleSubmit}>Update</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

ReactDom.render(<App />, document.getElementById('app'));