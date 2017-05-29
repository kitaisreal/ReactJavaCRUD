import React from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/rootReducer.js';
import {itemsFetch} from "./Actions/itemsActions";

const middleware = [thunk];
const initialState = {
    items:[],
    customers:[],
    attributesItem:[],
    attributesCustomer:[],
    singleItem:{}
};

const configureStore =()=>{
    const store =createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    );
    return store;
};
export default configureStore;