import React from "react";
import ReactDom from "react-dom";
import {connect} from "react-redux";
import { customerAuthorization} from "../Actions/customerActions";
import { Navbar, NavItem, Nav, Grid, Row, Col ,FormControl ,Tooltip, Popover, Modal, Button, OverlayTrigger,FormGroup} from "react-bootstrap";

class AuthorizationDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {showModal:false};
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    handleSubmit(e) {
        e.preventDefault();
        const newCustomer = {};
        newCustomer['email'] = ReactDom.findDOMNode(this.refs['email']).value.trim();
        newCustomer['password']=ReactDom.findDOMNode(this.refs['password']).value.trim();
        console.log(newCustomer);
        this.props.onAuthorizationCustomer(JSON.stringify(newCustomer));
        this.close()
    }

    render() {
        return (
            <div className="Comp">
                <Button
                    onClick={this.open}
                    bsStyle="success"
                >
                    Authorization
                </Button>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Authorization</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <FormGroup>
                                <FormControl type="text" placeholder="e-mail"  ref="email" className="field"/>
                                <FormControl type="password" placeholder="password" ref="password" className="field"/>
                            </FormGroup>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                        <Button onClick={this.handleSubmit}
                                bsStyle="success"
                        >Authorization</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        onAuthorizationCustomer:(customer)=>{
            dispatch(customerAuthorization(customer))
        }
    };
};
export default connect(null,mapDispatchToProps)(AuthorizationDialog)