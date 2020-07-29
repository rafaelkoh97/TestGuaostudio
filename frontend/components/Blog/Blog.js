import './blog.css';
import BlogCard from '../BlogCard/BlogCard';

const Blog = ({blogData}) => {
  return(
    <>
      <div className="container-info">
        <div className="blog-tags">
          <ul>
            <li>All</li>
            <li>Residential</li>
            <li>Comercial</li>
            <li>Product Design</li>
          </ul>
        </div>
        {blogData.map((item,key) => {
          return  <BlogCard 
            key={key}
            id={item.id}
            images={item.gallery}
            title={item.title}
            location={item.location}
            software={item.software}
          />
        })}
      </div>
    </>
  );
}

export default Blog;