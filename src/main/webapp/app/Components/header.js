import React from 'react';
import { Navbar, NavItem, Nav, Grid, Row, Col ,FormControl ,Tooltip, Popover, Modal, Button, OverlayTrigger} from "react-bootstrap";
import {Link} from 'react-router-dom';
import CreateItemModal from "./createItemModal";
export const Header =()=>{
    return (
        <div>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={'/'}> React Redux Spring Simple App</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem><CreateItemModal/></NavItem>
                    <NavItem>Link2</NavItem>
                </Nav>
             </Navbar>
        </div>
    )
};
