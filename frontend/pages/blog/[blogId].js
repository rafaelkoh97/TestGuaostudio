import Head from "next/head";
import PageDescription from "./../../components/PageDescription/PageDescription";

const BlogItem = ({blogId}) => {
  return(
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <PageDescription 
        title="Blog title" 
        titleIcon="https://cdn2.iconfinder.com/data/icons/viiva-content-editor/32/3D-512.png"
        goBack={true}
      >
      </PageDescription>
      <div className="container-info blogInfo">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus ipsum mauris, et egestas justo pretium et. In tristique quam fringilla quam auctor, eu suscipit leo tincidunt. Fusce pellentesque elit quis nunc congue, at molestie risus luctus. Nam dapibus ex vitae orci cursus sagittis. Cras massa dui, aliquet quis blandit non, ullamcorper ac odio. Donec quis aliquet lacus, eget porttitor sem. Integer tincidunt cursus neque, ut tincidunt urna. In hac habitasse platea dictumst. Curabitur a blandit tellus. Donec sit amet rutrum lorem. Maecenas suscipit sodales dignissim. Curabitur egestas faucibus ante, nec consequat eros pulvinar non. Interdum et malesuada fames ac ante ipsum primis in faucibus</p>
        <p>In hac habitasse platea dictumst. Aliquam dapibus dui tellus, ac semper lorem ullamcorper ut. Nulla facilisi. Praesent a tincidunt est. Praesent tempor id dui nec suscipit. Donec vel enim tortor. Nulla sed mi in felis lacinia rutrum nec vitae enim. Nullam efficitur nibh leo, sed dignissim arcu convallis at. Suspendisse suscipit ut nulla in viverra. Aliquam quis turpis tellus. Donec eros ligula, dictum sed velit at, accumsan lacinia ligula. Ut aliquet magna a ligula aliquet vehicula.</p>
        <p>Sed vehicula imperdiet erat, eget fermentum massa feugiat ut. Ut eros dolor, ornare ac arcu ut, fringilla semper nisi. Aenean viverra magna tincidunt pulvinar viverra. Praesent lobortis ex quis imperdiet elementum. Sed non metus eu quam auctor luctus nec sed urna. Etiam egestas quam porttitor est ornare auctor eget et risus. Morbi iaculis quam a enim scelerisque, a hendrerit nisi faucibus. Donec est nibh, lacinia sodales dolor finibus, faucibus rhoncus risus. Suspendisse potenti.</p>
        <p>Aliquam ac volutpat turpis. Aliquam erat volutpat. In hac habitasse platea dictumst. Vivamus placerat lacinia condimentum. Proin eleifend massa sed dui commodo egestas. Nunc congue sagittis imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vestibulum ornare tellus, et imperdiet ante venenatis non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi vitae diam sed enim placerat pretium. Duis quis rhoncus mi. Etiam lobortis ex vitae tellus feugiat venenatis. Ut vel euismod mauris. Integer lacus erat, feugiat et mauris eget, porttitor accumsan eros. Quisque consectetur libero vel lacus feugiat sodales.</p>
      </div>
    </>
  );
}

BlogItem.getInitialProps = ({query:{blogId}}) => {
  return {
    blogId
  };
};

export default BlogItem;