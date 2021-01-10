import React from "react"
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

const getListArea = (show) => {
    if(show){
        return (
            <SearchInfo>
                <SearchInfoTitle>热门搜索
                    <SearchInfoSwitch>换一换</SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                </SearchInfoList>
            </SearchInfo>
        );
    }else{
        return null
    }
}

const Header = (props) => {
    return (<HeaderWrapper>
        <Logo href='/'/>
        <Nav>
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载APP</NavItem>
            <NavItem className='right'>登陆</NavItem>
            <NavItem className='right'>Aa</NavItem>
            <NavSearch className={props.focused ? 'focused' : ''} onFocus={props.handleInputFocus}
                       onBlur={props.handleInputBlur}

            >
            </NavSearch>
            <NavItem className='left'>
                {getListArea(props.focused)}
            </NavItem>

        </Nav>
        <Addition>
            <Button className='writing'>写文章</Button>
            <Button className='reg'>注册</Button>
        </Addition>
    </HeaderWrapper>);
}

const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreator.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreator.searchBlur());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)