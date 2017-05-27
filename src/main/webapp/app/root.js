import React from 'react';
import ReactDom from "react-dom";
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import {createStore, combineReducers} from 'redux';
import App from './Components/app'
import configureStore from "./configureStore";
import {itemsFetch} from "./Actions/itemsActions";
import {fetchCustomers} from "./Actions/customerActions";
import {fetchAttributesItem} from "./Actions/itemsAttributesActions";
import {fetchAttributesCustomer} from "./Actions/customerAttributesActions";
const store = configureStore();

ReactDom.render(
    <Provider store={store}>
		<App/>
    </Provider>,document.getElementById('root')
);