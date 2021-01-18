import React,{PureComponent} from "react"
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
import {Link} from "react-router-dom";

class Header extends PureComponent{
    getListArea(show){
        const {focused,list,page,totalPage,mouseIn,handleMouseEnter,handleMouseLeave,handleChangePage} = this.props;
        const jsList = list.toJS();
        const pageList = []
        for (let i = (page-1)*10; i <page*10 ; i++) {
            pageList.push(
                <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
            )
        }
        if(focused || mouseIn){
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>热门搜索
                        <SearchInfoSwitch onClick = {()=>handleChangePage(page,totalPage)}>换一换</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            );
        }else{
            return null
        }
    }
    
    render() {
        const {focused,handleInputFocus,handleInputBlur} = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载APP</NavItem>
                    <NavItem className='right'>登陆</NavItem>
                    <NavItem className='right'>Aa</NavItem>
                    <NavSearch className={focused ? 'focused' : ''} onFocus={handleInputFocus}
                               onBlur={handleInputBlur}

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
        list: state.getIn(['header','list']),
        page: state.getIn(['header','page']),
        mouseIn: state.getIn(['header','mouseIn']),
        totalPage: state.getIn(['header','totalPage']),
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
        },
        handleMouseEnter(){
            dispatch(actionCreator.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreator.mouseLeave())
        },
        handleChangePage(page,totalPage){
            console.log(page,totalPage)
            if(page<totalPage)
                dispatch(actionCreator.changePage(page+1));
            else
                dispatch(actionCreator.changePage(1));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)