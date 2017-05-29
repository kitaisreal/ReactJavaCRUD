export const FETCH_SINGLE_ITEM='FETCH_SINGLE_ITEM';

export const receiveSingleItem=(json)=>{
    return {
        type:FETCH_SINGLE_ITEM,
        singleItem:json.singleItem
    };
};
export const singleItemFetch =(id) =>{
    return dispatch =>{
        return fetch('/api/items/get/'+id)
            .then(response=>response.json())
            .then(json=>dispatch(receiveSingleItem(json)))
    };
};