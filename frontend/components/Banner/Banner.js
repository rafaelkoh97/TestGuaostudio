import "./baner.css";
import CardImage from "../CardImage/CardImage";
import Container from "./../Container";

const Banner = ({ mainImage, secondaryImages }) => {
  return (
    <Container>
      <div className="banner-container">
        <img src={mainImage} alt="banner image" title="banner image" />

        {secondaryImages && (
          <div className="banner-secondary-container">
            {secondaryImages.map((image, key) => {
              return (
                <div key={key} className="banner-image-item">
                  <CardImage image={image} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Banner;
