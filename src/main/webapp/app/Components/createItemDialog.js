import React from "react";
import ReactDom from "react-dom";
import {connect} from "react-redux";
import {itemCreate} from "../Actions/itemsActions";
import {fetchAttributesItem} from "../Actions/itemsAttributesActions";
class CreateItemDialog extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.onAttributesItemGet();
    }

    handleSubmit(e) {
        e.preventDefault();
        const newItem = {};
        this.props.attributesItem.forEach(attribute => {
            newItem[attribute] = ReactDom.findDOMNode(this.refs[attribute]).value.trim();
        });
        this.props.onCreateItem(JSON.stringify(newItem));
        this.props.attributesItem.forEach(attribute => {
            ReactDom.findDOMNode(this.refs[attribute]).value = '';
        });
        window.location = "#";
    }

    render() {
        const inputs = this.props.attributesItem.map(attribute =>
            <p key={attribute}>
                <input type="text" placeholder={attribute} ref={attribute} className="field"/>
            </p>
        );
        return (
            <div>
                <a href="#createItem">Create Item</a>

                <div id="createItem" className="modalDialog">
                    <div>
                        <a href="#" title="Close" className="close">X</a>

                        <h2>Create new item</h2>

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
        attributesItem:state.attributesItem
    };
};
const mapDispatchToProps=(dispatch)=>{
    return {
        onAttributesItemGet:()=>{
            dispatch(fetchAttributesItem())
        },
        onCreateItem:(item)=>{
            dispatch(itemCreate(item))
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(CreateItemDialog)