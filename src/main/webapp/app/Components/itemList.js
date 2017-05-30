import React from "react";
import Item from "./item"
import {connect} from "react-redux";
import {itemsFetch} from '../Actions/itemsActions.js'
import { Navbar, NavItem, Nav, Grid, Row, Col ,FormControl ,Tooltip, Popover, Modal, Button, OverlayTrigger,ButtonGroup} from "react-bootstrap";
import {itemDelete} from "../Actions/itemsActions";
import SearchBar from './searchBar';
class ItemList extends React.Component{
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(){
        this.props.onCustomerLogOut();
    }
    componentDidMount() {
        this.props.onItemsGet();
    }
    render() {
        let filteredItems = this.props.items.filter(
            (item) =>{
                return item.itemFullName.indexOf(this.props.search) !==-1;
            }
        );
        return (
            <div>
                <SearchBar/>
                <div>
                    <div className="row">
                            {filteredItems.map(item =>
                                <Item key={item.itemID} item={item} />
                            )}
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        items:state.items,
        search:state.search
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