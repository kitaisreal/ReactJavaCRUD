import React from "react";
import { Navbar, NavItem, Nav, Grid, Row, Col ,FormControl ,Tooltip, Popover, Modal, Button, OverlayTrigger} from "react-bootstrap";
import CreateCustomerDialog from './createCustomerDialog.js';
import ItemList from './itemList'
import CustomerList from './customerList'
import {Header} from './Header'
import {BrowserRouter,Route,Link} from 'react-router-dom';
import CreateItemModal from "./createItemModal";
import singleItem from "./singleItem";
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
                            <CreateCustomerDialog/>
                            <CreateItemModal/>
                            <Link to={'/items'}>Items</Link>
                        </Col>
                        <Col md={8} sm={8}>
                            <Route path ='/items' component ={ItemList} />
                            <Route path ='/cusomers' component ={CustomerList}/>
                            <Route path='/items/:id' component ={singleItem}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}