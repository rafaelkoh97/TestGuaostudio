import Head from "next/head";
import PageDescription from "../../components/PageDescription/PageDescription";
import {API_URL} from './../../constants';

const BlogItem = ({blogInfo}) => {
  return(
    <>
      <Head>
        <title>{blogInfo.title}</title>
      </Head>
      <PageDescription
        title={blogInfo.title}
        titleIcon="https://cdn2.iconfinder.com/data/icons/viiva-content-editor/32/3D-512.png"
        goBack={true}>
      </PageDescription>
      <div className="container-info blogInfo">
        <p>{blogInfo.description}</p>
      </div>
    </>
  );
}

BlogItem.getInitialProps = async ({query:{id}}) => {
  const data = await fetch(`${API_URL}/data.json`)
              .then(res => res.json());
  return{
    blogInfo: data.data[id-1]
  }
}

export default BlogItem;