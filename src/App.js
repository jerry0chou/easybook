import Header from "./common/header";
import {Provider} from 'react-redux'
import store from "./store";

// provider组件 将store暴露出来，让下面的组件可以使用store
function App() {
    return (
        <Provider store={store}>
            <Header/>
        </Provider>
    );
}

export default App;
