import {fromJS} from "immutable";

const defaultStore = fromJS({
    topList: [{
        id: 1,
        title: '社会热点',
        imgUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg'
    }, {
        id: 2,
        title: '手绘',
        imgUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1091405991,859863778&fm=26&gp=0.jpg'
    }],
    articleList: [{
        id: 1,
        title: '关系再好，也不要跟人透露这三个隐私',
        desc: '1，自己的家里的家务事。很多人遇到点事就爱跟朋友倾诉，说自己的爱人这也不好，那不好。说者无意，听者有心，他就会把你家的事告诉其他人，那时候他们都..',
        imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1160360589,2429665544&fm=26&gp=0.jpg'
    }, {
        id: 2,
        title: '关系再好，也不要跟人透露这三个隐私',
        desc: '1，自己的家里的家务事。很多人遇到点事就爱跟朋友倾诉，说自己的爱人这也不好，那不好。说者无意，听者有心，他就会把你家的事告诉其他人，那时候他们都..',
        imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1160360589,2429665544&fm=26&gp=0.jpg'
    }],
    recommendList: [{
        id: 1,
        imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=310660914,2361219137&fm=26&gp=0.jpg'
    }, {
        id: 2,
        imgUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3895630235,4212690360&fm=26&gp=0.jpg'
    }
    ]
});

export default (state = defaultStore, action) => {
    // immutable 对象的方法，会结合之前的immutable对象的值
    // 和设置的值，返回一个全新的对象
    switch (action.type) {

        default:
            return state;
    }
}