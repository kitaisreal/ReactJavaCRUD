export const FETCH_ITEMS='FETCH_ITEMS';
export const CREATE_ITEM='CREATE_ITEM';
export const UPDATE_ITEM='UPDATE_ITEM';
export const DELETE_ITEM='DELETE_ITEM';

export const receiveItemsGet=(json)=>{
    return {
        type:FETCH_ITEMS,
        items:json.items
    };
};
export const receiveItemCreate=()=>{
    return {
        type:CREATE_ITEM
    };
};
export const receiveItemDelete=()=>{
  return {
      type:DELETE_ITEM
  };
};
export const receiveItemUpdate=()=>{
    return {
        type:UPDATE_ITEM
    };
};
export const itemsFetch =() =>{
    return dispatch =>{
        return fetch('/api/items')
            .then(response=>response.json())
            .then(json=>dispatch(receiveItemsGet(json)))
    };
};
export const itemCreate=(data)=>{
    return dispatch=> {
        return fetch('/api/items/add',{method:'POST',body:data})
            .then(json=>dispatch(receiveItemCreate()))
    }
};
export const itemDelete=(id)=>{
    return dispatch=> {
        return fetch('/api/items/delete/'+id)
            .then(response=>dispatch(receiveItemDelete()))
    }
};
export const itemUpdate=(data)=>{
    return dispatch=> {
        return fetch('/api/items/update',{method:'POST',body:data})
            .then(response=>dispatch(receiveItemUpdate()))
    }
};