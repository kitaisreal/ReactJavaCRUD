import React from "react";
import UpdateItemDialog from "./updateItemDialog"
import { Navbar, NavItem, Nav, Grid, Row, Col ,FormControl ,Tooltip, Popover, Modal, Button, OverlayTrigger} from "react-bootstrap";

export default class Item extends React.Component{
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.onDeleteItem(this.props.item);
    }
    render() {
        return (
            <tr>
                <td>{this.props.item.itemName}</td>
                <td>{this.props.item.brandName}</td>
                <td>
                    <UpdateItemDialog item={this.props.item} attributesItem = {this.props.attributesItem} onUpdateItem = {this.props.onUpdateItem} />
                </td>
                <td>
                    <button onClick={this.handleDelete}>Delete</button>
                </td>
            </tr>
        )
    }
}