import { Provider } from "react-redux";
import  store from "../Redux/Store/store.js";
import '@fontsource/roboto/500.css';

function App({ Component, pageProps }) {
return (
 <Provider store={store}>  
   <Component {...pageProps} />
 </Provider>
)
}

export default App
