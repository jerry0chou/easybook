import * as types from './actionTypes'
import {fromJS} from "immutable";

const defaultStore = fromJS({
        focused:false
});

export default (state= defaultStore, action)=>{
    // immutable 对象的方法，会结合之前的immutable对象的值
    // 和设置的值，返回一个全新的对象
    if(action.type === types.SEARCH_FOCUS){
        return state.set('focused',true)
    }
    if(action.type === types.SEARCH_BLUR){
        return state.set('focused',false)
    }
    return state;
}