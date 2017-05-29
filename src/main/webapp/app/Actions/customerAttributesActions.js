export const FETCH_ATTRIBUTES_CUSTOMER='FETCH_ATTRIBUTES_CUSTOMER';
export const receiveAttributesCustomer=(json)=>{
    return {
        type:FETCH_ATTRIBUTES_CUSTOMER,
        attributesCustomer:json.attributesCustomer
    };
};

export const fetchAttributesCustomer=()=>{
    return dispatch=>{
        return fetch('api/customer/attributes')
            .then(response=>response.json())
            .then(json=>dispatch(receiveAttributesCustomer(json)))
    };
};