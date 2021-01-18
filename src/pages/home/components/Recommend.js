import React,{PureComponent} from 'react'
import {RecommendWrapper,RecommendItem} from '../style'
import {connect} from 'react-redux'
class Recommend extends PureComponent{
    render() {
        return (
            <RecommendWrapper>
                {
                    this.props.list.map((item) =>{
                        return <RecommendItem imgUrl={item.imgUrl} key={item.id}></RecommendItem>
                    })
                }
            </RecommendWrapper>
        )
    }
}
const mapState=(state)=>({
    list:state.getIn(['home','recommendList']).toJS()
})
export default connect(mapState,null)(Recommend);