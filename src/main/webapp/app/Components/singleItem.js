import React from "react";
import {connect} from "react-redux";
import { Navbar, NavItem, Nav, Grid, Row, Col ,FormControl ,Tooltip, Popover, Modal, Button, OverlayTrigger} from "react-bootstrap";
import {BrowserRouter,Route,Link} from 'react-router-dom';
import {singleItemFetch} from "../Actions/singleItemActions";
class SingleItem extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this.props.params.id);
    }
    render() {
        return (
            <div>
                <p>SINGLE ITEM PAGE</p>
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