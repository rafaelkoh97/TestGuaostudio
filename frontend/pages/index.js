import Container from "./../components/Container";
import Banner from "./../components/Banner/Banner";
import PageDescription from "./../components/PageDescription/PageDescription";
import Blog from "../components/Blog/Blog";
import { API_URL } from "./../constants";

const Home = ({ blog }) => {
  const bannerMainImage = "/img/banner/mainSlider.jpg";

  const BannerSecondaryImages = [
    "/img/banner/virtualReality.jpg",
    "/img/banner/realState.jpg",
  ];

  const pageInfo = {
    title: "3D RENDERING",
    titleIcon:
      "https://cdn2.iconfinder.com/data/icons/viiva-content-editor/32/3D-512.png",
    button: { name: "Hire Us", path: "/" },
  };

  return (
    <Container>
      <Banner
        mainImage={bannerMainImage}
        secondaryImages={BannerSecondaryImages}
      />

      <PageDescription {...pageInfo}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed
          velit a quam vestibulum semper eget nec massa. Suspendisse potenti.
          Sed metus urna, pretium vitae tempor vel, tincidunt in velit. Fusce
          ullamcorper luctus eros, nec ornare leo tristique quis. Vestibulum
          erat lectus, mollis eget urna et, lobortis auctor augue. Aliquam erat
          volutpat. Sed lectus nisl, cursus at suscipit ac, blandit nec metus.
          Fusce dignissim rutrum euismod. Vestibulum fringilla dui at nibh
          commodo hendrerit. Donec feugiat interdum lorem, et bibendum lectus
          suscipit ac. Aliquam tincidunt imperdiet lacus vitae accumsan. Ut
          lectus elit, scelerisque nec ligula semper, venenatis pulvinar ante.
          Proin sed orci sed arcu porta pellentesque in vel augue. Donec ac
          semper enim. Quisque aliquet tempus ex in volutpat. Aenean a nisi sed
          dui lobortis tempus ac vitae est.
        </p>
      </PageDescription>

      <Blog blogData={blog} />
    </Container>
  );
};

Home.getInitialProps = async () => {
  const { data } = await fetch(`${API_URL}/data.json`).then((res) =>
    res.json()
  );

  return {
    blog: data,
  };
};

export default Home;
