import { Provider } from "react-redux";
import  store from "../Redux/Store/store.js";


function App({ Component, pageProps }) {
return (
 <Provider store={store}>  
   <Component {...pageProps} />
 </Provider>
)
}

export default App
