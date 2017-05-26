import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import {createStore, combineReducers} from 'redux';

const attributesItem =(state=[],action)=>{
    switch(action.type){
        case 'FETCH_ATTRIBUTES_ITEM':
            return Object.assign({},state,action.attributesItem);
        default:
            return state;
    }
};
export default attributesItem;