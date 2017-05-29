import React from "react";
import { Navbar, NavItem, Nav, Grid, Row, Col ,FormControl ,Tooltip, Popover, Modal, Button, OverlayTrigger} from "react-bootstrap";
import ItemList from './itemList'
import {Header} from './Header'
import {BrowserRouter,Route,Link,withRouter,Switch} from 'react-router-dom';
import singleItem from "./singleItem";
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header/>
                <Grid>
                    <Row>
                        <Col>
                            <Route path='/' exact component={ItemList}/>
                            <Route path='/items' component={ItemList}/>
                            <Route path='/item/:id' component ={singleItem}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
export default withRouter(App)