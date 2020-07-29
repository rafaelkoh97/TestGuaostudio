import "./blog.css";
import Container from "./../Container";
import BlogCard from "../BlogCard/BlogCard";

const Blog = ({ blogData }) => {
  const blogTags = ["All", "Residential", "Comercial", "Product Design"];
  return (
    <Container>
      <div className="container-info">
        <div className="blog-tags">
          <ul>
            {blogTags.map((item, key) => (
              <li key={key}>{item}</li>
            ))}
          </ul>
        </div>
        {blogData.map((item, key) => {
          return (
            <BlogCard
              key={key}
              id={item.id}
              images={item.gallery}
              title={item.title}
              location={item.location}
              software={item.software}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Blog;
