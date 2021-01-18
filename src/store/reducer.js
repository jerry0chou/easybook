import  headerReducer from "../common/header/store/reducer";
import {combineReducers} from "redux-immutable";
import  homeReducer from '../pages/home/store/reducer'
import detailReducer from '../pages/detail/store/reducer'
export default combineReducers({
    header:headerReducer,
    home: homeReducer,
    detail: detailReducer
})