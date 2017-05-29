import React from "react";
import { Navbar, NavItem, Nav, Grid, Row, Col ,FormControl ,Tooltip, Popover, Modal, Button, OverlayTrigger,Thumbnail} from "react-bootstrap";
import {connect} from 'react-redux';
import {Link} from "react-router-dom"

export default class Item extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-xs-6 col-md-3">

                    <Link to={`/item/${this.props.item.itemID}`} className="thumbnail">
                        <img src={`images/${this.props.item.itemImageName}`}/>
                        <div className="caption">
                            <h4>{this.props.item.itemFullName}</h4>
                        </div>
                    </Link>
            </div>
        )
    }
}