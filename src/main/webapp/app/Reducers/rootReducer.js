import items from './items.js';
import customers from './customers.js';
import attributesItem from './attributesItem.js';
import attributesCustomer from './attributesCustomer.js';

import {combineReducers} from 'redux';
const rootReducer = combineReducers({
    items, customers,attributesItem,attributesCustomer
});
export default rootReducer;
