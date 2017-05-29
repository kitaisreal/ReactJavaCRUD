import React from "react";
import { Navbar, NavItem, Nav, Grid, Row, Col ,FormControl ,Tooltip, Popover, Modal, Button, OverlayTrigger,Thumbnail} from "react-bootstrap";
import {connect} from 'react-redux';
import {Link} from "react-router-dom"

export default class Item extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        let itemFullName = this.props.item.itemName + " " + this.props.item.brandName;
        return (
            <div className="col-xs-6 col-md-3">

                    <Link to={`/item/${this.props.item.itemID}`} className="thumbnail">
                        <img src={`images/${this.props.item.itemImageName}`}/>
                        <div className="caption">
                            <h4>{itemFullName}</h4>
                            <Button onClick={()=>{
                                this.props.onItemDelete(this.props.item.itemID);
                                this.props.history.push("/items")}}>
                                Delete Item
                            </Button>
                        </div>
                    </Link>
            </div>
        )
    }
}