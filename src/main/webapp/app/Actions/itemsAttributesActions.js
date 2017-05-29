export const FETCH_ATTRIBUTES_ITEM='FETCH_ATTRIBUTES_ITEM';
export const receiveAttributesItem =(json)=>{
    return {
        type:FETCH_ATTRIBUTES_ITEM,
        attributesItem:json.attributesItem
    };
};
export const fetchAttributesItem=()=>{
    return dispatch=>{
        return fetch('api/items/attributes')
            .then(response=>response.json())
            .then(json=>dispatch(receiveAttributesItem(json)))
    };
};