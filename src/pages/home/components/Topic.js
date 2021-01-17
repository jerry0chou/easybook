import React, {Component} from 'react'
import {TopicWrapper, TopicItem} from '../style'
import {connect} from 'react-redux'
class Topic extends Component {
    render() {
        return (
            <TopicWrapper>
                {
                    this.props.list.map((item)=>{
                        return(
                            <TopicItem key={item.id}>
                                <img alt='' className='topic-img'
                                     src={item.imgUrl}/>
                                {item.title}
                            </TopicItem>
                        );
                    })
                }
            </TopicWrapper>
        )
    }
}

const mapState = (state) =>{
    return{
        list: state.getIn(['home','topicList']).toJS()
    }
}

export default connect(mapState,null)(Topic)