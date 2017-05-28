import React from 'react';
import ReactDom from "react-dom";
import {Provider} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import App from './Components/app'
import configureStore from "./configureStore";
import {itemsFetch} from "./Actions/itemsActions";
import {customersFetch} from "./Actions/customerActions";
const store = configureStore();

const SockJS = require('sockjs-client');
require('stompjs');
const socket = SockJS('/redux');
const stompClient = Stomp.over(socket);
let connect;

stompClient.connect({}, function(frame) {
    console.log('Connected: ' + frame);
    connect=true;
    stompClient.subscribe('/topic/items', function(messageOutput){
        console.log("SOCKET EVENT " + messageOutput);
        store.dispatch(itemsFetch())
    })
    stompClient.subscribe('/topic/customers', function(messageOutput){
        console.log("SOCKET EVENT "+ messageOutput);
        store.dispatch(customersFetch())
    })

});
ReactDom.render(
    <Provider store={store}>
		<BrowserRouter>
            <Route path='/' component={App}/>
        </BrowserRouter>
    </Provider>,document.getElementById('root')
);

