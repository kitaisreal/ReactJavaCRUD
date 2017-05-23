import React from "react";
import ReactDom from "react-dom";

export default class CreateCustomerDialog extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const newCustomer = {};
        this.props.attributesCustomer.forEach(attribute => {
            newCustomer[attribute] = ReactDom.findDOMNode(this.refs[attribute]).value.trim();
        });
        this.props.onCreateCustomer(newCustomer);
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