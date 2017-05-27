import React from "react";
import ReactDom from "react-dom";
import {connect} from "react-redux";
import {itemsFetch, itemUpdate} from "../Actions/itemsActions";
import {fetchAttributesItem} from "../Actions/itemsAttributesActions";
class UpdateItemDialog extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.onAttributesItemGet();
    }

    handleSubmit(e) {
        e.preventDefault();
        const updatedItem = {};
        updatedItem["itemID"] = this.props.item["itemID"];
        this.props.attributesItem.forEach(attribute => {
            updatedItem[attribute] = ReactDom.findDOMNode(this.refs[attribute]).value.trim();
        });
        this.props.onUpdateItem(JSON.stringify(updatedItem));
        window.location = "#";
    }

    render() {
        const inputs = this.props.attributesItem.map(attribute =>
            <p key={attribute}>
                <input type="text" placeholder={attribute} defaultValue = {this.props.item[attribute]} ref={attribute} className="field"/>
            </p>
        );
        var dialogId = "updateItem " + this.props.item.itemID;

        return (
            <div>
                <a href={"#" + dialogId}>Update</a>

                <div id={dialogId} className="modalDialog">
                    <div>
                        <a href="#" title="Close" className="close">X</a>

                        <h2>Update Item</h2>

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
        attributesItem:state.attributesItem
    };
};
const mapDispatchToProps=(dispatch)=>{
    return {
        onAttributesItemGet:()=>{
            dispatch(fetchAttributesItem())
        },
        onUpdateItem:(item)=>{
            dispatch(itemUpdate(item))
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(UpdateItemDialog)
