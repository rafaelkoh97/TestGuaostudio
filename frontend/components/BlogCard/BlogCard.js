import './blogCard.css';
import Carousel from './../Carousel/Carousel';

const BlogCard = () => {
  return(
    <>
      <div className="blog-card">
        <Carousel images={["/img/house.jpg","/img/casaPrefabricada.jpg"]} />
      </div>
    </>
  );
}
export default BlogCard;