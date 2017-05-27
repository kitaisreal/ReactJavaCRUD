export const FETCH_ATTRIBUTES_CUSTOMER='FETCH_ATTRIBUTES_CUSTOMER';
export const receiveAttributesCustomer=(json)=>{
    return {
        type:FETCH_ATTRIBUTES_CUSTOMER,
        attributesCustomer:json.attributesCustomer
    };
};

export const fetchAttributesCustomer=()=>{
    return dispatch=>{
        return fetch('api/customers/attributes')
            .then(responce=>responce.json())
            .then(json=>dispatch(receiveAttributesCustomer(json)))
    };
};