import './contactInfo.css';

const ContactInfo = ({title,children}) => {
    return(
      <>
        <div className="contact-info">
          <p className="contact-info-title">{title}</p>
          {children}
        </div>
      </>
    );
}
export default ContactInfo;