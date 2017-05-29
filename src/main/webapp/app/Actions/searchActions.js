const SEARCH_VALUE_CHANGE='SEARCH_VALUE_CHANGE';

export const searchChange=(value)=>{
    return {
        type:SEARCH_VALUE_CHANGE,
        value:value
    };
};