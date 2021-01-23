import axios from "axios";
import * as types from './actionTypes'
import {fromJS} from "immutable";

const changeHomeData = (result) =>({
    type: types.CHANGE_HOME_DATA,
    topicList:result.topicList,
    articleList:result.articleList,
    recommendList:result.recommendList
})
const addHomeList = (list) =>({
    type: types.ADD_ARTICLE_LIST,
    list:fromJS(list)
})

export const getHomeInfo = () => {
    return (dispatch) =>{
        axios.get('/api/home.json').then(res=>{
            console.log(res.data.data)
            const result = res.data.data;
            const action=changeHomeData(result)
            dispatch(action)
        })
    }
}

export const getMoreList =()=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json').then(res=>{
            const result = res.data.data;
            dispatch(addHomeList(result))
        })
    }
}