import * as types from './actionTypes'
import {fromJS} from "immutable";

const defaultStore = fromJS({
    focused:false,
    mouseIn:false,
    list: [], // 这个默认是普通对象，需要改变之前变成immutable类型,
    page: 1,
    totalPage: 1
});

export default (state= defaultStore, action) =>{
    // immutable 对象的方法，会结合之前的immutable对象的值
    // 和设置的值，返回一个全新的对象
    switch (action.type){
        case types.SEARCH_FOCUS:
            return state.set('focused',true);
        case types.SEARCH_BLUR:
            return state.set('focused',false);
        case types.CHANGE_LIST:
            return state.set('list',fromJS(action.data)).set('totalPage',action.totalPage);
        case types.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case types.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case types.CHANGE_PAGE:
            return state.set('page',action.page)
        default:
            return state;
    }
}