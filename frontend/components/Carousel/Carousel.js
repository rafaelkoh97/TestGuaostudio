import {useState} from 'react';
import './carousel.css';

const Carousel = ({images}) => {
  const NUM_ONE = 1;
  const NUM_ZERO = 0;
  const [currentImage, setCurrentImage] = useState(0);
  const totalImages = images.length;

  const handlePrev = () => {
    currentImage > NUM_ZERO && setCurrentImage(currentImage - NUM_ONE);
  }

  const handleNext = () => {
    currentImage < (totalImages - NUM_ONE) && setCurrentImage(currentImage + NUM_ONE);
  }

  return(
    <>
      <div className="carousel-container">
        <div className="carousel-images">
           <img src={images[currentImage]} alt="carousel image" title="carousel image" />
        </div>
        <div className="carousel-controls">
          <button onClick={handlePrev}> {'<'} </button>
          <button onClick={handleNext}> {'>'} </button>
        </div>
      </div>
    </>
  );
}
export default Carousel;