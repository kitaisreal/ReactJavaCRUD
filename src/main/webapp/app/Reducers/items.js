import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import {createStore, combineReducers} from 'redux';

const items =(state=[],action)=>{
    switch(action.type){
        case 'FETCH_ITEMS':
            return action.items;
        case 'CREATE_ITEM':
            console.log("ITEM IS SUCESSFULLY CREATED");
            return state;
        case 'DELETE_ITEM':
            console.log("ITEM IS SUCESSFULLY DELETED");
            return state;
        case 'UPDATE_ITEM':
            console.log("ITEM IS SUCESSFULLY UPDATED");
            return state;
        default:
            return state;
    }
};
export default items;