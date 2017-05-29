import React from "react";
import { Navbar, NavItem, Nav, Grid, Row, Col ,FormControl ,Tooltip, Popover, Modal, Button, OverlayTrigger} from "react-bootstrap";
import CreateCustomerDialog from './createCustomerDialog.js';
import ItemList from './itemList'
import {Header} from './Header'
import {BrowserRouter,Route,Link,withRouter} from 'react-router-dom';
import CreateItemModal from "./createItemModal";
import singleItem from "./singleItem";
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.history.push('/items');
    }
    render() {
        return (
            <div>
                <Header/>
                <Grid>
                    <Row>
                        <Col md={4} sm={4}>
                            <CreateItemModal/>
                        </Col>
                        <Col md={8} sm={8}>
                            <Route path='/items' component ={ItemList}/>
                            <Route path='/item/:id' component ={singleItem}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
export default withRouter(App)