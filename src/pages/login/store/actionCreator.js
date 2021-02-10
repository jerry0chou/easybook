import axios from "axios";
import * as types from './actionTypes'
const changeLogin = () =>({
    type: types.CHANGE_LOGIN,
    value: true
})

export const loginWeb = (account,password) =>{
    return (dispatch)=>{
        axios.get('/api/login.json?account='+ account+'&password='+password).then((res)=>{
            console.log(res)
            const result = res.data.data;
            if(result)
            {
                dispatch(changeLogin())
            }else {
                alert("login went some error")
            }
        })
    }
}