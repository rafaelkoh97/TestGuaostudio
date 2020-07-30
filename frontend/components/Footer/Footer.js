import './footer.css';
import Container from '../Container';
import ContactInfo from '../ContactInfo/ContactInfo';

const Footer = () => {
  const socialIcons = [
    { icon: 'facebook.svg', url: '' },
    { icon: 'instagram.svg', url: '' },
  ];

  return (
    <Container>
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-12">
              <div className="footer-info">
                <p className="contact-us">CONTACT US</p>
                <p className="contact-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent non pellentesque massa, laoreet placerat arcu. Etiam
                  congue, dui non vestibulum facilisis, nunc eros mollis est,
                  sed euismod nisi massa non sem. Aliquam fermentum orci ut nibh
                  vulputate luctus.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-6 center">
              <ContactInfo title="PHONE">
                <p>(33) 3647 8763</p>
                <p>(33) 3647 8763</p>
              </ContactInfo>
            </div>
            <div className="col-md-4 col-sm-4 col-6 center">
              <ContactInfo title="EMAIL">
                <p>info@boreal.com</p>
              </ContactInfo>
            </div>
            <div className="col-md-4 col-sm-4 col-7 center">
              <ContactInfo title="ADDRESS">
                <p>Av. López Mateos</p>
                <p>WeWork Midtown</p>
                <p>Guadalajara Jal. México</p>
              </ContactInfo>
            </div>
            <div className="col-md-12 col-sm-12 col-12">
              <div className="social-icons">
                {socialIcons.map((item, key) => (
                  <a key={key} href={item.url}>
                    <img
                      src={`/icons/${item.icon}`}
                      alt="Social Icon"
                      title="Social Icon"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
