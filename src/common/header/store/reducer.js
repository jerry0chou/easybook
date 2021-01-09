import * as types from './actionTypes'

const defaultStore = {
    focused:false,
};

export default (state= defaultStore, action)=>{
    if(action.type === types.SEARCH_FOCUS){
        return {focused: true}
    }
    if(action.type === types.SEARCH_BLUR){
        return {focused: false}
    }
    return state;
}