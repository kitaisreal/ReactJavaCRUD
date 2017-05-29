import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import {createStore, combineReducers} from 'redux';

const items =(state=[],action)=>{
    switch(action.type){
        case 'FETCH_SINGLE_ITEM':
            console.log("SINGLE ITEM FETCHED CHECK FOR SOCKETS");
            return action.singleitem;
        default:
            return state;
    }
};

export default items;