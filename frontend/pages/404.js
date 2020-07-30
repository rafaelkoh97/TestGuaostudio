import '../styles/NotFound.css';
import Container from '../components/Container';

const NotFound = () => {
  const imageNotFound = 'https://i1.wp.com/evtec.ca/wp-content/uploads/2019/10/404.gif?ssl=1';

  return (
    <Container>
      <div className="notFound">
        <img src={imageNotFound} />
      </div>
    </Container>
  );
};

export default NotFound;
