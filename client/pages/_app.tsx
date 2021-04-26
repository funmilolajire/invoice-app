import { AppComponent } from 'next/dist/next-server/lib/router/router';
import Layout from '../components/Layout/Layout'
import '../styles/globals.css'
import '../styles/DatePickerCustom.css'
import '../styles/variables.css'

const MyApp: AppComponent = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
