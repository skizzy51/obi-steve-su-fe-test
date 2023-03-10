import Head from 'next/head'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Obi Steve su-fe-test</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}
