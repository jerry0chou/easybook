import React, {PureComponent} from 'react'
import {LoginWrapper, LoginBox, Input,Button} from './style'
import {connect} from 'react-redux'
import * as actionCreator from './store/actionCreator'
class Login extends PureComponent {
    render() {
        return (
           <LoginWrapper>
               <LoginBox>
                   <Input placeholder ='账号'  ref={(input) => {this.account = input}}/>
                   <Input placeholder ='密码' type='password' ref={(input) => {this.password = input}}/>
                   <Button onClick={() => {this.props.loginWeb(this.account,this.password)}}>登陆</Button>
               </LoginBox>
           </LoginWrapper>
        )
    }
}


const mapDispatch = (dispatch) =>({
    loginWeb(accountElem,passwordElem){
        dispatch(actionCreator.loginWeb(accountElem.value,passwordElem.value))
        console.log('sds',accountElem.value,passwordElem.value)
    }
})
export default connect(null,mapDispatch)(Login)