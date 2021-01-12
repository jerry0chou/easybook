import React,{Component} from "react"
import {connect} from 'react-redux'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from "./style";
import * as actionCreator from './store/actionCreator'

class Header extends Component{
    getListArea(show){
        if(this.props.focused){
            return (
                <SearchInfo>
                    <SearchInfoTitle>热门搜索
                        <SearchInfoSwitch>换一换</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            this.props.list.map((item)=>{
                                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            })
                        }
                    </SearchInfoList>
                </SearchInfo>
            );
        }else{
            return null
        }
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
                    <NavSearch className={this.props.focused ? 'focused' : ''} onFocus={this.props.handleInputFocus}
                               onBlur={this.props.handleInputBlur}

                    >
                    </NavSearch>
                    <NavItem className='left'>
                        {this.getListArea()}
                    </NavItem>

                </Nav>
                <Addition>
                    <Button className='writing'>写文章</Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'),
        list: state.getIn(['header','list'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreator.getList())
            dispatch(actionCreator.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreator.searchBlur());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)