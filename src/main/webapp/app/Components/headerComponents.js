import React from 'react';
import { Navbar, NavItem, Nav, Grid, Row, Col ,FormControl ,Tooltip, Popover, Modal, Button, ButtonGroup, OverlayTrigger} from "react-bootstrap";
import CreateItemModal from "./createItemModal"
import AuthorizationDialog from "./authorizationDialog"
import RegistrationDialog from './registrationDialog'
import LogOut from "./logout"
export const HeaderComponent =({customer})=>{
    if (customer.Authorized!="TRUE") return (
        <Nav pullRight>
            <RegistrationDialog/>
            <AuthorizationDialog/>
        </Nav>
    );
    return (

        <div>
            <Nav>
                <NavItem>LOGGED AS: {customer.CustomerFullName}</NavItem>
            </Nav>
            <Nav pullRight>
                <CreateItemModal/>
                <LogOut/>
            </Nav>
        </div>
    );
};