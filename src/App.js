import Header from "./common/header";
import {Provider} from 'react-redux'
import {BrowserRouter,Route} from "react-router-dom";
import store from "./store";
import Home from './pages/home'
import Detail from './pages/detail'
// provider组件 将store暴露出来，让下面的组件可以使用store
function App() {
    return (
        <Provider store={store}>
            <div>
                <Header/>
                <BrowserRouter>
                    {/* exact 表示精确匹配*/}
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/detail' exact component={Detail}></Route>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
