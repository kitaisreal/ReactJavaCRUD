import React from "react";
import ReactDom from "react-dom";
import {connect} from "react-redux";
import { Navbar, NavItem, Nav, Grid, Row, Col ,FormControl ,Tooltip, Popover, Modal, Button, OverlayTrigger} from "react-bootstrap";
import {itemCreate} from "../Actions/itemsActions";
import {fetchAttributesItem} from "../Actions/itemsAttributesActions";


class CreateItemModal extends React.Component{
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
        const input = ReactDom.findDOMNode(this.refs["file"]);
        e.preventDefault();
        const newItem = {};
        this.props.attributesItem.forEach(attribute => {
            newItem[attribute] = ReactDom.findDOMNode(this.refs[attribute]).value.trim();
        });
        this.props.attributesItem.forEach(attribute => {
            ReactDom.findDOMNode(this.refs[attribute]).value = '';
        });
        const data = new FormData();
        data.append('item',JSON.stringify(newItem));
        data.append('file',input.files[0]);
        this.props.onCreateItem(data);
        this.close();
    }

    render() {
        const inputs = this.props.attributesItem.map(attribute => (
                <p key={attribute}>
                    <input type="text" placeholder={attribute} ref={attribute} className="field"/>
                </p>
            )
        );
        return (
            <div>
                <Button
                    bsStyle="primary"
                    bsSize="large"
                    onClick={this.open}
                >
                    Add Item
                </Button>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Item Add</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            {inputs}
                            <input type="file" ref="file"/>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleSubmit}>Create</Button>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return {
        attributesItem:state.attributesItem
    };
};
const mapDispatchToProps=(dispatch)=>{
    return {
        onAttributesItemGet:()=>{
            dispatch(fetchAttributesItem())
        },
        onCreateItem:(data)=>{
            dispatch(itemCreate(data))
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(CreateItemModal)