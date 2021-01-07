import React,{Component} from "react"
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button} from "./style";

class Header extends Component {
    constructor(pros) {
        super();
        this.state = {
            focused:false
        }
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }
    handleInputFocus(){
        console.log('handleInputFocus')
        this.setState({
            focused:true
        })
    }
    handleInputBlur(){
        console.log('handleInputBlur')
        this.setState({
            focused:false
        })
    }
   render() {
       return (
           <HeaderWrapper>
               <Logo href='/'/>
               <Nav>
                   <NavItem className='left active'>首页</NavItem>
                   <NavItem className='left'>下载APP</NavItem>
                   <NavItem className='right'>登陆</NavItem>
                   <NavItem className='right'>Aa</NavItem>
                   <NavSearch className={this.state.focused ? 'focused': ''}
                              onFocus={this.handleInputFocus} onBlur={this.handleInputBlur}
                   ></NavSearch>

               </Nav>
               <Addition>
                   <Button className='writing'>写文章</Button>
                   <Button className='reg'>注册</Button>
               </Addition>
           </HeaderWrapper>
       )
   }
}
export default Header