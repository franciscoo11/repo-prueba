
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/layout';

export default function App({ Component, pageProps }: AppProps) {
  return(
  <>
  <Layout></Layout>
  <Component {...pageProps} />
  </> 
  )
}
