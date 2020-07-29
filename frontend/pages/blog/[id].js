import Head from "next/head";
import Container from "./../../components/Container";
import PageDescription from "../../components/PageDescription/PageDescription";
import { API_URL } from "./../../constants";

const BlogItem = ({ blogInfo }) => {
  const pageInfo = {
    title: blogInfo.title,
    titleIcon:
      "https://cdn2.iconfinder.com/data/icons/viiva-content-editor/32/3D-512.png",
    goBack: true,
  };

  return (
    <Container>
      <Head>
        <title>{blogInfo.title}</title>
      </Head>
      <PageDescription {...pageInfo} />
      <div className="container-info blogInfo">
        <p>{blogInfo.description}</p>
      </div>
    </Container>
  );
};

BlogItem.getInitialProps = async ({ query: { id } }) => {
  const { data } = await fetch(`${API_URL}/data.json`).then((res) =>
    res.json()
  );
  return {
    blogInfo: data[id - 1], // NOTE: Restamos uno al indice para obtener el id en base 0
  };
};

export default BlogItem;
