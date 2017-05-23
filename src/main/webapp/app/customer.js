import React from "react";
import UpdateCustomerDialog from "./updateCustomerDialog"
import { Navbar, NavItem, Nav, Grid, Row, Col ,FormControl ,Tooltip, Popover, Modal, Button, OverlayTrigger} from "react-bootstrap";
export default class Customer extends React.Component{
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