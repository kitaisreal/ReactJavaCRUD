import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import {createStore, combineReducers} from 'redux';

const customers=(state=[],action)=> {
    switch (action.type) {
        case 'FETCH_CUSTOMERS':
            return action.customers;
        case 'ADD_CUSTOMER':
            return state;
        //
        case 'DELETE_CUSTOMER':
            return state;
        //
        case 'UPDATE_CUSTOMER':
            return state;
        //ACTION
        default:
            return state;
    }
};
export default customers;