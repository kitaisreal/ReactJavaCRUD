import React from "react";
import {connect} from "react-redux";
import {searchChange} from "../Actions/searchActions";
class SearchBar extends React.Component{
    updateSearch(event){
        this.props.onSearchChange(event.target.value.substr(0,20));
    }
    render() {
        return (
            <div>
                <input type="text" value ={this.props.search} onChange={this.updateSearch.bind(this)}/>
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        onSearchChange:(value)=>{
            dispatch(searchChange(value))
        }
    };
};
export default connect(null,mapDispatchToProps)(SearchBar)