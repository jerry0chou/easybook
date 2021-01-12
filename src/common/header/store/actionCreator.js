import * as types from './actionTypes'
import axios from 'axios'

export const searchFocus = () => ({
    type: types.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: types.SEARCH_BLUR
})

const changeList = (data) => {
    return {
        type: types.CHANGE_LIST,
        data: data
    }
}

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