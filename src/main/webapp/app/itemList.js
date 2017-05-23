import React from "react";
import Item from "./item"
import { Navbar, NavItem, Nav, Grid, Row, Col ,FormControl ,Tooltip, Popover, Modal, Button, OverlayTrigger} from "react-bootstrap";

export default class ItemList extends React.Component{
    render() {
        let items = this.props.items.map(item =>
            <Item key={item.itemID}item={item} onDeleteItem={this.props.onDeleteItem} onUpdateItem={this.props.onUpdateItem} attributesItem = {this.props.attributesItem} />
        );
        return (
            <div className="panel panel-default">
                <div className="panel-heading"><h3>Items Table</h3></div>
                <table className="table">
                    <tbody>
                    <tr>
                        <th>Item Name</th>
                        <th>Model Name</th>
                        <th>Image Name</th>
                    </tr>
                    {items}
                    </tbody>
                </table>
            </div>
        )
    }
}