import React from 'react';
import { Navbar, NavItem, Nav, Grid, Row, Col ,FormControl ,Tooltip, Popover, Modal, Button, OverlayTrigger} from "react-bootstrap";
import CreateItemModal from "./createItemModal"
import AuthorizationDialog from "./authorizationDialog"
import RegistrationDialog from './registrationDialog'
export const HeaderComponent =({auth})=>{
    if (auth !="TRUE") return (
        <Nav pullRight>
            <RegistrationDialog/>
            <AuthorizationDialog/>
        </Nav>
    );
    return (
        <div>
            <CreateItemModal/>
            <Button>
                LogOut
            </Button>
        </div>
    );
};
