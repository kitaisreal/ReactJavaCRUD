import React from "react";
import ReactDom from "react-dom";
import {connect} from "react-redux";
import {fetchAttributesCustomer} from "../Actions/customerAttributesActions";
import {customerCreate} from "../Actions/customerActions";

class CreateCustomerDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.onAttributesCustomerGet();
    }

    handleSubmit(e) {
        e.preventDefault();
        const newCustomer = {};
        console.log(this.props.attributesCustomer);
        this.props.attributesCustomer.forEach(attribute => {
            newCustomer[attribute] = ReactDom.findDOMNode(this.refs[attribute]).value.trim();
        });
        this.props.onCreateCustomer(JSON.stringify(newCustomer));
        this.props.attributesCustomer.forEach(attribute => {
            ReactDom.findDOMNode(this.refs[attribute]).value = '';
        });
        window.location = "#";
    }

    render() {
        const inputs = this.props.attributesCustomer.map(attribute =>
            <p key={attribute}>
                <input type="text" placeholder={attribute} ref={attribute} className="field"/>
            </p>
        );
        return (
            <div>
                <a href="#createCustomer">Create Customer</a>

                <div id="createCustomer" className="modalDialog">
                    <div>
                        <a href="#" title="Close" className="close">X</a>

                        <h2>Create new customer</h2>

                        <form>
                            {inputs}
                            <button onClick={this.handleSubmit}>Create</button>
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
        onCreateCustomer:(customer)=>{
            dispatch(customerCreate(customer))
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(CreateCustomerDialog)