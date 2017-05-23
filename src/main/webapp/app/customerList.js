import React from "react";
import { Navbar, NavItem, Nav, Grid, Row, Col ,FormControl ,Tooltip, Popover, Modal, Button, OverlayTrigger} from "react-bootstrap";
import Customer from "./customer";

export default class CustomerList extends React.Component{
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

