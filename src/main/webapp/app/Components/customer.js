import React from "react";
import UpdateCustomerDialog from "./updateCustomerDialog"
import { Navbar, NavItem, Nav, Grid, Row, Col ,FormControl ,Tooltip, Popover, Modal, Button, OverlayTrigger} from "react-bootstrap";
export default class Customer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <tr>
                <td>{this.props.customer.customerFirstName}</td>
                <td>{this.props.customer.customerLastName}</td>
                <td>
                    <UpdateCustomerDialog customer={this.props.customer}/>
                </td>
                <td>
                    <button onClick = {this.props.onClick}>Delete</button>
                </td>
            </tr>
        )
    }
}