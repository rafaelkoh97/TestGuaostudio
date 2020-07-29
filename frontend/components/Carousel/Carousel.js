import { useState } from "react";
import "./carousel.css";
import Container from "./../Container";

const Carousel = ({ images }) => {
  const NUM_ADD_REMOVE = 1;
  const BASE_MIN_NUMBER = 0;
  const [currentImage, setCurrentImage] = useState(0);
  const totalImages = images.length;

  const handlePrev = () => {
    currentImage > BASE_MIN_NUMBER &&
      setCurrentImage(currentImage - NUM_ADD_REMOVE);
  };

  const handleNext = () => {
    currentImage < totalImages - NUM_ADD_REMOVE &&
      setCurrentImage(currentImage + NUM_ADD_REMOVE);
  };

  return (
    <Container>
      <div className="carousel-container">
        <div className="carousel-images">
          <img
            src={images[currentImage].image}
            alt="carousel image"
            title="carousel image"
          />
        </div>
        <div className="carousel-controls">
          <button onClick={handlePrev}> {"<"} </button>
          <button onClick={handleNext}> {">"} </button>
        </div>
      </div>
    </Container>
  );
};
export default Carousel;
