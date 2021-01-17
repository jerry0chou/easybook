import React,{Component} from 'react'
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import List from "./components/List";
import Recommend from "./components/Recommend";
import {HomeWrapper,HomeLeft,HomeRight} from './style'
import axios from "axios";
import {connect} from 'react-redux'

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
        axios.get('/api/home.json').then(res=>{
            console.log(res.data.data)
            const result = res.data.data;
            const action={
                type: 'change_home_data',
                topicList:result.topicList,
                articleList:result.articleList,
                recommendList:result.recommendList
            }
            this.props.changeHomeData(action)
        })
    }
}
const mapDispatchToProps=(dispatch)=>({
    changeHomeData(action) {
        dispatch(action)
    }
})
export default connect(null,mapDispatchToProps)(Home);