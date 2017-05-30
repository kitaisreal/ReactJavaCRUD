import React from "react";
import {connect} from "react-redux";
import {searchChange} from "../Actions/searchActions";
import { Navbar, NavItem, Nav, Grid, Row, Col ,FormControl ,Tooltip, Popover, Modal, Button, OverlayTrigger,FormGroup} from "react-bootstrap";
class SearchBar extends React.Component{
    updateSearch(event){
        this.props.onSearchChange(event.target.value.substr(0,20));
    }
    render() {
        return (
            <div>
                <form>
                    <FormGroup>
                        <FormControl type="text" value ={this.props.search} placeholder="Type Item Name" onChange={this.updateSearch.bind(this)}/>
                    </FormGroup>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        onSearchChange:(value)=>{
            dispatch(searchChange(value))
        }
    };
};
export default connect(null,mapDispatchToProps)(SearchBar)