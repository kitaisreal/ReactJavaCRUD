import React from 'react';
import { Navbar, NavItem, Nav, Grid, Row, Col ,FormControl ,Tooltip, Popover, Modal, Button, OverlayTrigger} from "react-bootstrap";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {HeaderComponent} from "./headerComponents"
class Header extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to={'/'}> React Redux Spring Simple App</Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <HeaderComponent auth={this.props.customer.Authorized}/>
                </Navbar>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        customer:state.customer
    };
};
export default connect(mapStateToProps,null)(Header)