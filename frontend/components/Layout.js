import Head from 'next/head';
import Header from './Header/Header';
 
const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>Boreal</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header/>
      <div className="page-container">
        {children}
      </div>
    </>
  );
}
export default Layout;