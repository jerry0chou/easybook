import React, {PureComponent} from 'react'
import {DetailWrapper,Header,Content} from './style'
import {connect} from 'react-redux'
import * as actionCreator from './store/actionCreator'
class Detail extends PureComponent {
    render() {
        return (
            <DetailWrapper>
                <Header>
                    {this.props.title}
                </Header>
                <Content dangerouslySetInnerHTML={{__html:this.props.content}}>
                </Content>
            </DetailWrapper>
        )
    }
    componentDidMount() {
        this.props.getDetail();
    }
}
const mapState = (state) =>({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
})

const mapDispatch = (dispatch) =>({
    getDetail(){
        dispatch(actionCreator.getDetail());
    }
})
export default connect(mapState,mapDispatch)(Detail)