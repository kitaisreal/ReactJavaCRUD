import React from 'react';
import ReactDom from "react-dom";
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import {createStore, combineReducers} from 'redux';
import App from './Components/app'
import configureStore from "./configureStore";

const store = configureStore();
console.log("STORE BEFORE " + store.getState());
store.dispatch({type:"FETCH_ITEMS"});
console.log("STORE AFTER " + store.getState());

export const FETCH_ITEMS='FETCH_ITEMS';
export const FETCH_CUSTOMERS='FETCH_CUSTOMERS';
function receiveItems(json){
    return {
        type:'FETCH_ITEMS',
        items:json.items
    }
}
function receiveCustomers(json){
    return {
        type:'FETCH_CUSTOMERS',
        customers:json.customers
    }
}
function receiveAttributesItem(json){
    return {
        type:'FETCH_ATTRIBUTES_ITEM',
        attributesItem:json.attributesItem
    }
}
function receiveAttributesCustomer(json){
    return {
        type:'FETCH_ATTRIBUTES_CUSTOMER',
        attributesItem:json.attributesCustomer
    }
}
function fetchItems(){
    return dispatch =>{
        return fetch('/api/items')
            .then(responce=>responce.json())
            .then(json=>dispatch(receiveItems(json)))
    }
}
function fetchCustomers(){
    return dispatch =>{
        return fetch('/api/customers')
            .then(responce=>responce.json())
            .then(json=>dispatch(receiveCustomers(json)))
    }
}
function fetchAttributesItem(){
    return dispatch=>{
        return fetch('api/items/attributes')
            .then(responce=>responce.json())
            .then(json=>dispatch(receiveAttributesItem(json)))
    }
}
function fetchAttributesCustomer(){
    return dispatch=>{
        return fetch('api/customer/attributes')
            .then(responce=>responce.json())
            .then(json=>dispatch(receiveAttributesCustomer(json)))
    }
}
store.dispatch(fetchItems()).then(()=>console.log( store.getState()));
store.dispatch(fetchCustomers()).then(()=>console.log( store.getState()));
store.dispatch(fetchAttributesItem()).then(()=>console.log( store.getState()));
store.dispatch(fetchAttributesCustomer()).then(()=>console.log( store.getState()));
ReactDom.render(
    <Provider store={store}>
		<App/>
    </Provider>,document.getElementById('root')
);