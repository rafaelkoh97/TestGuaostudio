import './blog.css';
import BlogCard from '../BlogCard/BlogCard';

const Blog = () => {
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
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </>
  );
}

export default Blog;