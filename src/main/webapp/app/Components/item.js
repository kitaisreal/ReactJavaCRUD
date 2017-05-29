import React from "react";
import UpdateItemModal from "./updateItemModal"
import { Navbar, NavItem, Nav, Grid, Row, Col ,FormControl ,Tooltip, Popover, Modal, Button, OverlayTrigger,Thumbnail} from "react-bootstrap";
import {connect} from 'react-redux';

import {Link} from "react-router-dom"
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
                    <UpdateItemModal item={this.props.item}/>
                </td>
                <td>
                    <img className="image" src={`images/${this.props.item.itemImageName}`} />
                </td>
                <td>
                    <Link to={`/items/${this.props.item.itemID}`}>LINK</Link>
                </td>
                <td>
                    <button onClick={this.props.onClick}>delete</button>
                </td>
            </tr>
        )
    }
}