import React from "react";
import ReactDom from "react-dom";
import {fetchAttributesCustomer} from "../Actions/customerAttributesActions";
import {customeAuthorization} from "../Actions/customerActions";
import {connect} from "react-redux";

class UpdateCustomerDialog extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.onAttributesCustomerGet();
    }


    handleSubmit(e) {
        e.preventDefault();
        const updatedCustomer = {};
        updatedCustomer["customerID"] = this.props.customer["customerID"];
        this.props.attributesCustomer.forEach(attribute => {
            updatedCustomer[attribute] = ReactDom.findDOMNode(this.refs[attribute]).value.trim();
        });
        this.props.onUpdateCustomer(JSON.stringify(updatedCustomer));
        window.location = "#";
    }

    render() {
        const inputs = this.props.attributesCustomer.map(attribute =>
            <p key={attribute}>
                <input type="text" placeholder={attribute} defaultValue = {this.props.customer[attribute]} ref={attribute} className="field"/>
            </p>
        );

        const dialogId = "updateCustomer " + this.props.customer.customerID;

        return (
            <div>
                <a href={"#" + dialogId}>Update</a>

                <div id={dialogId} className="modalDialog">
                    <div>
                        <a href="#" title="Close" className="close">X</a>

                        <h2>Update Customer</h2>

                        <form>
                            {inputs}
                            <button onClick={this.handleSubmit}>Update</button>
                        </form>
                    </div>
                </div>
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
        onUpdateCustomer:(customer)=>{
            dispatch(customeAuthorization(customer))
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(UpdateCustomerDialog)