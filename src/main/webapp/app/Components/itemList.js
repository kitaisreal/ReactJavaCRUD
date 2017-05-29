import React from "react";
import Item from "./item"
import {store} from "redux";
import {connect} from "react-redux";
import {itemsFetch} from '../Actions/itemsActions.js'
import { Navbar, NavItem, Nav, Grid, Row, Col ,FormControl ,Tooltip, Popover, Modal, Button, OverlayTrigger} from "react-bootstrap";
import {itemDelete} from "../Actions/itemsActions";
class ItemList extends React.Component{
    componentDidMount() {
        this.props.onItemsGet();
    }
    render() {
        let items = this.props.items.map(item =>
            <Item key={item.itemID} item={item} />
        );
        return (
            <div className="row">
                    {items}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        items:state.items
    };
};
const mapDispatchToProps=(dispatch)=>{
    return {
        onItemsGet:()=>{
            dispatch(itemsFetch())
        },
        onItemDelete:(id)=>{
            dispatch(itemDelete(id))
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(ItemList)