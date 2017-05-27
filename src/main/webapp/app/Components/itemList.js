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
            <Item key={item.itemID} item={item} onClick={()=>{this.props.onItemDelete(item.itemID)}}/>
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