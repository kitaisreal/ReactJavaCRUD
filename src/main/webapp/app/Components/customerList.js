import React from "react";
import { Navbar, NavItem, Nav, Grid, Row, Col ,FormControl ,Tooltip, Popover, Modal, Button, OverlayTrigger} from "react-bootstrap";
import {connect} from "react-redux";
import Customer from "./customer";
import {customersFetch, customerDelete} from "../Actions/customerActions";

class CustomerList extends React.Component{
    componentDidMount() {
        this.props.onCustomersGet();
    }
    render(){
        let customers = this.props.customers.map(customer =>
            <Customer key = {customer.customerID}
                      customer={customer}
                      onClick={()=>{this.props.onCustomerDelete(customer.customerID)}}
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
const mapStateToProps=(state)=>{
    return {
        customers:state.customers
    };
};
const mapDispatchToProps=(dispatch)=>{
    return {
        onCustomersGet:()=>{
            dispatch(customersFetch())
        },
        onCustomerDelete:(id)=>{
            dispatch(customerDelete(id))
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(CustomerList)