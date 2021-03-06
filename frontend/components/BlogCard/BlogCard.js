import Link from 'next/link';
import './blogCard.css';
import Container from '../Container';
import Carousel from '../Carousel/Carousel';

const BlogCard = ({
  id, images, title, location, software,
}) => (
  <Container>
    <div className="blog-card">
      <Carousel images={images} />
      <Link href="/blog/[id]" as={`/blog/${id}`}>
        <a>
          <p>
            <span className="bold">Project Name: </span>
            {title}
          </p>
          <p>
            <span className="bold">Location: </span>
            {location}
          </p>
          <p>
            <span className="bold">Software: </span>
            {software}
          </p>
        </a>
      </Link>
    </div>
  </Container>
);
export default BlogCard;
