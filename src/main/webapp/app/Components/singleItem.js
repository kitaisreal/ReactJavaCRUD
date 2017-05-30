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
        let singleItemComponent;
        if (this.props.customer.CustomerID==this.props.singleItem.ownerID){
            singleItemComponent=(
                <div>
                <Button onClick={()=>{
                this.props.onItemDelete(this.props.singleItem.itemID);
                this.props.history.push("/items")}}>
                Delete Item
            </Button>
            <UpdateItemModal
            item={this.props.singleItem}
            refreshSingleItem={this.props.onSingleItemGet(this.props.match.params.id)}/>
                </div>);
        }
        return (
            <Grid>
                <Row>
                    <Col md={6} sm={6} className="thumbnail">
                        <img className="image" src={`images/${this.props.singleItem.itemImageName}`} />
                    </Col>
                    <Col md={4} sm={4}>
                        <div className="container">
                            <h3>ItemName:{this.props.singleItem.itemName}</h3>
                            <h3>BrandName:{this.props.singleItem.brandName}</h3>
                            <h3>CustomerFullName:{this.props.singleItem.customerFullName}</h3>
                            {singleItemComponent}
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
const mapStateToProps=(state)=>{
    return {
        singleItem:state.singleItem,
        customer:state.customer
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