import React from "react";
import ReactDom from "react-dom";
import $ from "jquery";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [], customers: []};
    }
    componentDidMount() {
        $.ajax({
            url: 'items',
            type: 'GET',
            dataType: 'json',
            contentType: 'application/json',
            mimeType: 'application/json',

            success:(data) => {
                this.setState({
                    items: data.items
                }, function () {
                    console.log(data.items[0].itemName);
                    console.log("Items " + this.state.items)
                });
            },
            error:function(data,status,er) {
                alert("error: "+data+" status: "+status+" er:"+er);
            }
        });
        $.ajax({
            url: 'customers',
            type: 'GET',
            dataType: 'json',
            contentType: 'application/json',
            mimeType: 'application/json',

            success:(data) => {
                this.setState({
                    customers: data.customers
                }, function () {
                    console.log("Customer " + data.customers[0].customerNick);
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
                <ItemList items={this.state.items}/>
                <CustomerList customers = {this.state.customers}/>
            </div>
        );
    }
}

class ItemList extends React.Component{
    render() {
            let items = this.props.items.map(item =>
                <Item key={item.itemID}item={item}/>
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
                    <th>Customer Nickname</th>
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
        console.log("Delete " + this.props.item.itemID + " "+ this.props.item.itemName + "  "  + this.props.item.brandName);
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
        console.log("Delete " + this.props.customer.customerID + " " + this.props.customer.customerNick);
    }
    render(){
        return (
            <tr>
                <td>{this.props.customer.customerNick}</td>
                <td>
                    <button onClick = {this.handleDelete}>Delete</button>
                </td>
            </tr>
        )
    }
}
ReactDom.render(<App />, document.getElementById('app'));