import React from "react";
import ReactDom from "react-dom";
import {connect} from "react-redux";
import {fetchAttributesCustomer} from "../Actions/customerAttributesActions";
import {customerRegistration} from "../Actions/customerActions";
import { Navbar, NavItem, Nav, Grid, Row, Col ,FormControl ,Tooltip, Popover, Modal, Button, OverlayTrigger} from "react-bootstrap";

class RegistrationDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {showModal:false};
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

    componentDidMount() {
        this.props.onAttributesCustomerGet();
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
        console.log(this.props.attributesCustomer);
        this.props.attributesCustomer.forEach(attribute => {
            newCustomer[attribute] = ReactDom.findDOMNode(this.refs[attribute]).value.trim();
        });
        this.props.onRegistrationCustomer(JSON.stringify(newCustomer));
        this.props.attributesCustomer.forEach(attribute => {
            ReactDom.findDOMNode(this.refs[attribute]).value = '';
        });
        this.close()
    }

    render() {
        const inputs = this.props.attributesCustomer.map(attribute =>(
            <p key={attribute}>
                <input type="text" placeholder={attribute} ref={attribute} className="field"/>
            </p>
            )
        );
        return (
            <div>
                <Button
                    bsStyle="primary"
                    bsSize="small"
                    onClick={this.open}
                >
                    Registration
                </Button>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Registration</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            {inputs}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleSubmit}
                                bsStyle="success"
                        >Registration</Button>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        attributesCustomer:state.attributesCustomer
    };
};
const mapDispatchToProps=(dispatch)=>{
    return {
        onAttributesCustomerGet:()=>{
            dispatch(fetchAttributesCustomer())
        },
        onRegistrationCustomer:(customer)=>{
            dispatch(customerRegistration(customer))
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(RegistrationDialog)
