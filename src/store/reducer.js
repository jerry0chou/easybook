import  headerReducer from "../common/header/store/reducer";
import {combineReducers} from "redux-immutable";
import  homeReducer from '../pages/home/store/reducer'
export default combineReducers({
    header:headerReducer,
    home: homeReducer,
})