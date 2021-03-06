import React from "react";
import ReactDom from "react-dom";
import {connect} from "react-redux";
import { Navbar, NavItem, Nav, Grid, Row, Col ,FormControl ,Tooltip, Popover, Modal, Button, OverlayTrigger,FormGroup} from "react-bootstrap";
import {fetchAttributesItem} from "../Actions/itemsAttributesActions";
import {itemUpdate} from "../Actions/itemsActions";
class UpdateItemModal extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {showModal:false};
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }
    componentDidMount() {
        this.props.onAttributesItemGet();
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    handleSubmit(e) {
        e.preventDefault();
        const input = ReactDom.findDOMNode(this.refs["file"]);
        const updatedItem = {};
        updatedItem["itemID"] = this.props.item["itemID"];
        this.props.attributesItem.forEach(attribute => {
            updatedItem[attribute] = ReactDom.findDOMNode(this.refs[attribute]).value.trim();
        });
        updatedItem['ownerID']=this.props.customer.CustomerID;
        const data = new FormData();
        data.append('item',JSON.stringify(updatedItem));
        data.append('file',input.files[0]);
        this.props.onUpdateItem(data);
        this.props.refreshSingleItem;
        this.close();
    }

    render() {
        const inputs = this.props.attributesItem.map(attribute =>
            <p key={attribute}>
                <FormControl type="text" placeholder={attribute} defaultValue = {this.props.item[attribute]} ref={attribute} className="field"/>
            </p>
        );
        return (
            <div className="Comp">
                <Button
                    bsStyle="primary"
                    onClick={this.open}
                >
                    Update Item
                </Button>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title><h2>Update Item</h2></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormGroup>
                            {inputs}
                            <input type="file" ref="file"/>
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                        <Button onClick={this.handleSubmit} bsStyle="success">Update</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return {
        attributesItem:state.attributesItem,
        customer:state.customer
    };
};
const mapDispatchToProps=(dispatch)=>{
    return {
        onAttributesItemGet:()=>{
            dispatch(fetchAttributesItem())
        },
        onUpdateItem:(data)=>{
            dispatch(itemUpdate(data))
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(UpdateItemModal)
