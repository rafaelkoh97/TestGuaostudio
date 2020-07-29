import './cardImage.css';

const CardImage = ({image}) => {
  return(
    <>
      <div className="images-item">
        <div className="images-item-background" />
        <img src={"/img/banner/"+image} />
      </div>
    </>
  );
}
export default CardImage;