import React from 'react';
import { Navbar, NavItem, Nav, Grid, Row, Col ,FormControl ,Tooltip, Popover, Modal, Button, OverlayTrigger} from "react-bootstrap";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {customerLogOut} from "../Actions/customerActions";
class Logout extends React.Component{
    constructor(props) {
        super(props);
        this.handleLogOut = this.handleLogOut.bind(this);
    }
    handleLogOut(){
        this.props.onCustomerLogOut();
    }
    render() {
        return (
            <div className="Comp">
                <Button onClick={this.handleLogOut}
                        bsStyle="success">
                    LOGOUT</Button>
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        onCustomerLogOut:()=>{
            dispatch(customerLogOut());
        }
    };
};
export default connect(null,mapDispatchToProps)(Logout)