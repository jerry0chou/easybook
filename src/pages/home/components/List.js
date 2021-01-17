import React,{Component} from 'react'
import {ListItem,ListInfo} from "../style";
import {connect} from 'react-redux'
class List extends Component{
    render() {
        return (
            <div>
                {
                    this.props.list.map((item)=>{
                        return(
                            <ListItem key={item.id}>
                                <img alt='' className='pic' src={item.imgUrl}/>
                                <ListInfo>
                                    <h3 className='title'>{item.title}</h3>
                                    <p className='desc'>{item.desc}</p>
                                </ListInfo>
                            </ListItem>
                        );
                    })
                }


            </div>
        )
    }
}
const mapState= (state)=>{
    return{
        list:state.getIn(['home','articleList']).toJS()
    }
}

export default connect(mapState,null)(List);