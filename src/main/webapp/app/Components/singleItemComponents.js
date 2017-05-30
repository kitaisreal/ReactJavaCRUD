import React from 'react';
import { Navbar, NavItem, Nav, Grid, Row, Col ,FormControl ,Tooltip, Popover, Modal, Button, OverlayTrigger} from "react-bootstrap";
import CreateItemModal from "./createItemModal"

export const SingleItemComponent =({auth})=>{
    if (auth =="TRUE") return (
        <div>
            <RegistrationDialog/>
            <AuthorizationDialog/>
        </div>
    );
    return (
        <div>
            <div>

            </div>
        </div>
    );
};
