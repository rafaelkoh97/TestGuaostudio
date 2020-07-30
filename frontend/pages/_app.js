import Layout from '../components/Layout';
import '../styles/global.css';
import '../styles/bootstrap-grid.min.css';

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
