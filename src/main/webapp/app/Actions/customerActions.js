export const CUSTOMER_REGISTRATION='CUSTOMER_REGISTRATION';
export const CUSTOMER_AUTHORIZATION='CUSTOMER_AUTHORIZATION';
export const CUSTOMER_LOG_OUT='CUSTOMER_LOG_OUT';

export const receiveCustomerRegistration=()=>{
    return {
        type:CUSTOMER_REGISTRATION
    };
};
export const receiveCustomerAuthorization=(json)=>{
    return {
        type:CUSTOMER_AUTHORIZATION,
        customer:json.customer
    };
};

export const customerLogOut=()=>{
    return {
        type:CUSTOMER_LOG_OUT,
    };
}

export const customerRegistration=(customer)=>{
    return dispatch=> {
        return fetch('/api/customer/registration',{method:'POST',body:customer})
            .then(json=>dispatch(receiveCustomerRegistration()))
    }
};
export const customerAuthorization=(customer)=>{
    return dispatch=> {
        return fetch('/api/customer/authorization',{method:'POST',body:customer})
            .then(response=>response.json())
            .then(json=>dispatch(receiveCustomerAuthorization(json)))

    }
};