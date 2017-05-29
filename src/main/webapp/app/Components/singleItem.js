import React from "react";
import {connect} from "react-redux";
import { Navbar, NavItem, Nav, Grid, Row, Col ,FormControl ,Tooltip, Popover, Modal, Button, OverlayTrigger} from "react-bootstrap";
import {BrowserRouter,Route,Link} from 'react-router-dom';
import {singleItemFetch} from "../Actions/singleItemActions";
import {itemDelete} from "../Actions/itemsActions";
import {withRouter} from 'react-router-dom';
import UpdateItemModal from "./updateItemModal"

class SingleItem extends React.Component {
    componentDidMount() {
        this.props.onSingleItemGet(this.props.match.params.id);
    }
    render() {
        return (
            <div>
                <Col md={4} sm={4}>
                    <img className="image" src={`images/${this.props.singleItem.itemImageName}`} />
                </Col>
                <Col md={8} sm={8}>
                    <p>{this.props.singleItem.itemName}</p>
                    <p>{this.props.singleItem.brandName}</p>
                    <p>{this.props.singleItem.customerFullName}</p>
                    <Button onClick={()=>{
                        this.props.onItemDelete(this.props.singleItem.itemID);
                        this.props.history.push("/items")}}>
                            Delete Item
                    </Button>
                    <UpdateItemModal
                        item={this.props.singleItem}
                        refreshSingleItem={this.props.onSingleItemGet(this.props.match.params.id)}
                    />
                </Col>
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
        },
        onItemDelete:(id)=>{
            dispatch(itemDelete(id))
        }
    };
};
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SingleItem))