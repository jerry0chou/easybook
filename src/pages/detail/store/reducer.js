import {fromJS} from "immutable";
import * as types from './actionTypes'
const defaultStore = fromJS({
    title: '',
    content: ''
});

export default (state = defaultStore, action) => {
    // immutable 对象的方法，会结合之前的immutable对象的值
    // 和设置的值，返回一个全新的对象
    switch (action.type) {
        case types.CHANGE_DETAIL:
            return state.merge({
                title:action.title,
                content: action.content
            })
        default:
            return state;
    }
}