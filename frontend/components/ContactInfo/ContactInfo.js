import './contactInfo.css';
import Container from '../Container';

const ContactInfo = ({ title, children }) => (
  <Container>
    <div className="contact-info">
      <p className="contact-info-title">{title}</p>
      {children}
    </div>
  </Container>
);
export default ContactInfo;
