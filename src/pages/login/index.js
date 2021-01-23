import React, {PureComponent} from 'react'
import {LoginWrapper, LoginBox, Input,Button} from './style'
import {connect} from 'react-redux'
// import * as actionCreator from './store/actionCreator'
class Login extends PureComponent {
    render() {
        console.log()
        return (
           <LoginWrapper>
               <LoginBox>
                   <Input placeholder ='账号' />
                   <Input placeholder ='密码' />
                   <Button>登陆</Button>
               </LoginBox>
           </LoginWrapper>
        )
    }
}
const mapState = (state) =>({

})

const mapDispatch = (dispatch) =>({

})
export default connect(mapState,mapDispatch)(Login)