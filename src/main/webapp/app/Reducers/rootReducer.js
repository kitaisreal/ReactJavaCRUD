import items from './items.js';
import customers from './customers.js';
import attributesItem from './attributesItem.js';
import attributesCustomer from './attributesCustomer.js';
import singleItem from "./singleItem";
import {combineReducers} from 'redux';
import search from "./search";
const rootReducer = combineReducers({
    items, customers,attributesItem,attributesCustomer,singleItem,search
});
export default rootReducer;
