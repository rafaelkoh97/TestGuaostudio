import './baner.css';
import CardImage from '../CardImage/CardImage';
import Container from '../Container';

const Banner = ({ mainImage, secondaryImages }) => (
  <Container>
    <div className="banner-container">
      <img src={mainImage} alt="banner boreal" title="banner boreal" />

      {secondaryImages && (
        <div className="banner-secondary-container">
          {secondaryImages.map((image) => (
            <div key={image.id} className="banner-image-item">
              <CardImage image={image.image} />
            </div>
          ))}
        </div>
      )}
    </div>
  </Container>
);

export default Banner;
