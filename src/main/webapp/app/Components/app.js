import React from "react";
import { Navbar, NavItem, Nav, Grid, Row, Col ,FormControl ,Tooltip, Popover, Modal, Button, OverlayTrigger} from "react-bootstrap";
import CreateItemDialog from './createItemDialog.js';
import CreateCustomerDialog from './createCustomerDialog.js';
import ItemList from './itemList'
import CustomerList from './customerList'
import {Header} from './Header'

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header/>
                <Grid>
                    <Row>
                        <Col md={4} sm={4}>
                            <CreateItemDialog/>
                            <CreateCustomerDialog/>
                        </Col>
                        <Col md={8} sm={8}>
                            <ItemList />
                            <CustomerList/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}