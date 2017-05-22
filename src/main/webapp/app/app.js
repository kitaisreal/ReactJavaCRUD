import React from "react";
import ReactDom from "react-dom";
import $ from "jquery";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [], customers: [], attributesItem:["itemName","itemBrand","customerID"]};
        this.loadItemsFromServer = this.loadItemsFromServer.bind(this);
        this.loadCustomersFromServer = this.loadCustomersFromServer.bind(this);
        this.onDeleteItem = this.onDeleteItem.bind(this);
        this.onDeleteCustomer = this.onDeleteCustomer.bind(this);
        this.onCreateItem= this.onCreateItem.bind(this);
        this.onCustomerCreate = this.onCustomerCreate.bind(this);
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

    }
    onCreateItem(item){
        $.ajax({
            type : "POST",
            contentType:"application/json",
            url : "/items/add",
            data : JSON.stringify(item),
            success :(data)=>{
                console.log("ITEM CREATED " + item.itemID + " " + item.itemName)
                this.loadItemsFromServer();
            },
            error:function(data,status,er) {
                alert("error: "+data+" status: "+status+" er:"+er);
            }
        });
    }
    onCustomerCreate(customer){

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
                    console.log("Customer " + data.customers[0].customerFirstName + "  " + data.customers[0].customerLastName);
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
                <CreateDialog attributesItem = {this.state.attributesItem} onCreateItem = {this.onCreateItem}/>
                <ItemList items={this.state.items} onDeleteItem = {this.onDeleteItem}/>
                <CustomerList customers = {this.state.customers}/>
            </div>
        );
    }
}

class ItemList extends React.Component{
    render() {
        let items = this.props.items.map(item =>
            <Item key={item.itemID}item={item} onDeleteItem={this.props.onDeleteItem} />
        );
        return (
            <table>
                <tbody>
                <tr>
                    <th>Item Name</th>
                    <th>Model Name</th>
                </tr>
                {items}
                </tbody>
            </table>
        )
    }
}
class CustomerList extends React.Component{
    render(){
        let customers = this.props.customers.map(customer =>
            <Customer key = {customer.customerID} customer={customer}/>);
        return (
            <table>
                <tbody>
                <tr>
                    <th>Customer Firstname</th>
                    <th>Customer Lastname</th>
                </tr>
                {customers}
                </tbody>
            </table>
        )
    }
}

class Item extends React.Component{
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.onDeleteItem(this.props.item)
    }
    render() {
        return (
            <tr>
                <td>{this.props.item.itemName}</td>
                <td>{this.props.item.brandName}</td>
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

    }
    render(){
        return (
            <tr>
                <td>{this.props.customer.customerFirstName}</td>
                <td>{this.props.customer.customerLastName}</td>
                <td>
                    <button onClick = {this.handleDelete}>Delete</button>
                </td>
            </tr>
        )
    }
}
class CreateDialog extends React.Component {

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
                <a href="#createItem">Create</a>

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

ReactDom.render(<App />, document.getElementById('app'));