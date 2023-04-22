import { Provider } from "react-redux";
import { store }from "../Redux/Store/store.js";


export default function App({ Component, pageProps }) {
{/* <Provider store={store}> */} 
  return <Component {...pageProps} />
{/* </Provider>; */}
}

