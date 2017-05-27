import React from "react";
import UpdateItemDialog from "./updateItemDialog"
import { Navbar, NavItem, Nav, Grid, Row, Col ,FormControl ,Tooltip, Popover, Modal, Button, OverlayTrigger} from "react-bootstrap";
import {connect} from 'react-redux';

export default class Item extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr>
                <td>{this.props.item.itemName}</td>
                <td>{this.props.item.brandName}</td>
                <td>
                    <UpdateItemDialog item={this.props.item}/>
                </td>
                <td>
                    <button onClick={this.props.onClick}>delete</button>
                </td>
            </tr>
        )
    }
}