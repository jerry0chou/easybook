import React, {PureComponent} from 'react'
import {DetailWrapper,Header,Content} from './style'
import {connect} from 'react-redux'
import * as actionCreator from './store/actionCreator'
class Detail extends PureComponent {
    render() {
        console.log()
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
        const id =this.props.match.params.id
        this.props.getDetail(id);
    }
}
const mapState = (state) =>({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
})

const mapDispatch = (dispatch) =>({
    getDetail(id){
        dispatch(actionCreator.getDetail(id));
    }
})
export default connect(mapState,mapDispatch)(Detail)