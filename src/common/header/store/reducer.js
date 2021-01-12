import * as types from './actionTypes'
import {fromJS} from "immutable";

const defaultStore = fromJS({
    focused:false,
    list: [] // 这个默认是普通对象，需要改变之前变成immutable类型
});

export default (state= defaultStore, action) =>{
    // immutable 对象的方法，会结合之前的immutable对象的值
    // 和设置的值，返回一个全新的对象
    if(action.type === types.SEARCH_FOCUS){
        return state.set('focused',true)
    }
    if(action.type === types.SEARCH_BLUR){
        return state.set('focused',false)
    }
    if(action.type === types.CHANGE_LIST){
        return state.set('list',fromJS(action.data))
    }
    return state;
}