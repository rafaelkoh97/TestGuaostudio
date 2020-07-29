import "./cardImage.css";
import Container from "./../Container";

const CardImage = ({ image }) => {
  return (
    <Container>
      <div className="images-item">
        <div className="images-item-background" />
        <img src={image} />
      </div>
    </Container>
  );
};
export default CardImage;
