import React,{PureComponent} from 'react'
import {ListItem,ListInfo,LoadMore} from "../style";
import {connect} from 'react-redux'
import * as actionCreator from '../store/actionCreator'
import {Link} from 'react-router-dom'
class List extends PureComponent{
    render() {
        return (
            <div>
                {
                    this.props.list.map((item,index)=>{
                        return(
                            <Link key={index} to='/detail'>
                                <ListItem key={index}>
                                    <img alt='' className='pic' src={item.imgUrl}/>
                                    <ListInfo>
                                        <h3 className='title'>{item.title}</h3>
                                        <p className='desc'>{item.desc}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        );
                    })
                }
                <LoadMore onClick={this.props.getMoreList}>更多文字</LoadMore>
            </div>
        )
    }
};
const mapState= (state)=>{
    return{
        list:state.getIn(['home','articleList']).toJS()
    }
}
const mapDispatch = (dispatch) => ({
    getMoreList(){
        dispatch(actionCreator.getMoreList())
    }
})
export default connect(mapState,mapDispatch)(List);