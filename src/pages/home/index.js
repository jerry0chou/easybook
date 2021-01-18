import React,{PureComponent} from 'react'
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import List from "./components/List";
import Recommend from "./components/Recommend";
import {HomeWrapper,HomeLeft,HomeRight,BackTop} from './style'
import {connect} from 'react-redux'
import * as actionCreator from './store/actionCreator'
class Home extends PureComponent{
    handleScrollTop(){
        window.scrollTo(0,0);
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="https://img1.mukewang.com/5febfc0f0001674217920764.jpg"/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData();
    }
}
const mapDispatchToProps=(dispatch)=>({
    changeHomeData() {
       const action = actionCreator.getHomeInfo();
       dispatch(action)
    }
})
export default connect(null,mapDispatchToProps)(Home);