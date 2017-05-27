export const FETCH_CUSTOMERS='FETCH_CUSTOMERS';
export const CREATE_CUSTOMER='CREATE_CUSTOMER';
export const UPDATE_CUSTOMER='UPDATE_CUSTOMER';
export const DELETE_CUSTOMER='DELETE_CUSTOMER';

export const receiveCustomersGet =(json) =>{
    return {
        type:FETCH_CUSTOMERS,
        customers:json.customers
    };
};
export const receiveCustomerCreate=()=>{
    return {
        type:CREATE_CUSTOMER
    };
};
export const receiveCustomerDelete=()=>{
    return {
        type:DELETE_CUSTOMER
    };
};
export const receiveCustomerUpdate=()=>{
    return {
        type:UPDATE_CUSTOMER
    };
};
export const customersFetch =() =>{
    return dispatch =>{
        return fetch('/api/customers')
            .then(responce=>responce.json())
            .then(json=>dispatch(receiveCustomersGet(json)))
    };
};

export const customerCreate=(customer)=>{
    return dispatch=> {
        return fetch('/api/customers/add',{method:'POST',body:customer})
            .then(json=>dispatch(receiveCustomerCreate()))
    }
};
export const customerDelete=(id)=>{
    return dispatch=> {
        return fetch('/api/customers/delete/'+id)
            .then(response=>dispatch(receiveCustomerDelete()))
    }
};
export const customerUpdate=(customer)=>{
    return dispatch=> {
        return fetch('/api/customers/update',{method:'POST',body:customer})
            .then(response=>dispatch(receiveCustomerUpdate()))
    }
};