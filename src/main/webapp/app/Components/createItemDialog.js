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

                        <form  >
                            {inputs}
                            <input type="file" ref="file"/>
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
        onCreateItem:(data)=>{
            dispatch(itemCreate(data))
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(CreateItemDialog)