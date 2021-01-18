import React,{Component} from 'react'
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import List from "./components/List";
import Recommend from "./components/Recommend";
import {HomeWrapper,HomeLeft,HomeRight} from './style'
import {connect} from 'react-redux'
import * as actionCreator from './store/actionCreator'
class Home extends Component{
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