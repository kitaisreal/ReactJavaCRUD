import React from "react";
import {connect} from "react-redux";
import { Navbar, NavItem, Nav, Grid, Row, Col ,FormControl ,Tooltip, Popover, Modal, Button, OverlayTrigger} from "react-bootstrap";
import {BrowserRouter,Route,Link} from 'react-router-dom';
import {singleItemFetch} from "../Actions/singleItemActions";
class SingleItem extends React.Component {
    componentDidMount() {
        this.props.onSingleItemGet(this.props.match.params.id);
    }
    render() {
        return (
            <div>
                <p>{this.props.singleItem.itemName}</p>
                <p>{this.props.singleItem.brandName}</p>
                <p>{this.props.singleItem.customerFullName}</p>
                <img className="image" src={`images/${this.props.singleItem.itemImageName}`} />
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return {
        singleItem:state.singleItem
    };
};
const mapDispatchToProps=(dispatch)=>{
    return {
        onSingleItemGet:(id)=>{
            dispatch(singleItemFetch(id))
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(SingleItem)