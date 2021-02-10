import {fromJS} from "immutable";
import * as types from './actionTypes'
const defaultStore = fromJS({
    isLogin: false
});

export default (state = defaultStore, action) => {
    switch (action.type) {
        case types.CHANGE_LOGIN:
            return state.set('isLogin',action.value)
        default:
            return state;
    }
}