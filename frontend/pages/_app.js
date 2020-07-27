// import App from 'next/app'
import Layout from './../components/Layout';
import './../styles/global.css';
import './../styles/bootstrap-grid.min.css';

const MyApp = ({ Component, pageProps }) => {
  return(
     <Layout>
        <Component {...pageProps} />
     </Layout>
  );
}

// MyApp.getInitialProps = async (appContext) => {
//   const appProps = await App.getInitialProps(appContext);
//   return { ...appProps }
// }

export default MyApp