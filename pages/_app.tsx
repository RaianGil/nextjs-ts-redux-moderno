import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../store'
import './global.css'
const MyApp = ({ Component, pageProps}:AppProps) => (
  <Provider store={store}>
    <label>Top Menu</label>
    <Component {...pageProps} />
  </Provider>
)

export default MyApp