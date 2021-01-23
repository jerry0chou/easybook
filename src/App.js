import Header from "./common/header";
import {Provider} from 'react-redux'
import {BrowserRouter,Route} from "react-router-dom";
import store from "./store";
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'
// provider组件 将store暴露出来，让下面的组件可以使用store
function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
                {/* exact 表示精确匹配*/}
                <Route path='/' exact component={Home}></Route>
                <Route path='/login' exact component={Login}></Route>
                <Route path='/detail/:id' exact component={Detail}></Route>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
