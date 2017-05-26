import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import {createStore, combineReducers} from 'redux';

const items =(state=[],action)=>{
    switch(action.type){
        case 'FETCH_ITEMS':
            return Object.assign({},state,action.items);
        case 'ADD_ITEM':
            
            console.log("TRY TO ADD ITEM");
            return state;
        case 'DELETE_ITEM':
            console.log("TRY TO DELETE ITEM");
            return state;
        case 'UPDATE_ITEM':
            console.log("TRY TO UPDATE ITEM");
            return state;
        default:
            return state;
    }
};
export default items;