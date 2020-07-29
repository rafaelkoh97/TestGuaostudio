import './baner.css';
import CardImage from '../CardImage/CardImage';

const Banner = ({mainImage,secondaryImages}) => {
  return(
    <>
      <div className="banner-container">
         <img src={mainImage} alt="banner image" title="banner image"/>
         {secondaryImages && 
            <div className="banner-secondary-container">
              <div className="banner-image-item">
                <CardImage image={secondaryImages[0]} />
              </div>
              <div className="banner-image-item">
                <CardImage image={secondaryImages[1]} />
              </div>
            </div>}
      </div>
    </>
  );
}

export default Banner;