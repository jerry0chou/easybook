import * as types from './actionTypes'
import axios from 'axios'

export const searchFocus = () => ({
    type: types.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: types.SEARCH_BLUR
})

const changeList = (data) => {
    console.log(Math.ceil(data.length / 10))
    return {
        type: types.CHANGE_LIST,
        data: data,
        totalPage: Math.ceil(data.length / 10)
    }
}

export const mouseEnter = () =>({
    type:types.MOUSE_ENTER
})
export const mouseLeave = () =>({
    type:types.MOUSE_LEAVE
})
export const changePage =(page)=>({type: types.CHANGE_PAGE,page})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then(res => {
            console.log(res)
            dispatch(changeList(res.data.data))
        }).catch(error => {
            console.log('error')
        })
    }
}