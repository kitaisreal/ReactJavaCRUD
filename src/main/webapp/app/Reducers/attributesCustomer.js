import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import {createStore, combineReducers} from 'redux';

const attributesCustomer =(state=[],action)=>{
    switch(action.type){
        case 'FETCH_ATTRIBUTES_CUSTOMER':
            return action.attributesCustomer;
        default:
            return state;
    }
};
export default attributesCustomer;