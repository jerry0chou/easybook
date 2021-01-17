import {fromJS} from "immutable";

const defaultStore = fromJS({
    topicList: [],
    articleList: [],
    recommendList: []
});

export default (state = defaultStore, action) => {
    // immutable 对象的方法，会结合之前的immutable对象的值
    // 和设置的值，返回一个全新的对象
    switch (action.type) {
        case 'change_home_data':
            return state.merge({
                topicList:fromJS(action.topicList),
                articleList:fromJS(action.articleList),
                recommendList:fromJS(action.recommendList)
            })
        default:
            return state;
    }
}