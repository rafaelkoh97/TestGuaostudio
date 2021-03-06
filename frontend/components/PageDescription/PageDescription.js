import Link from 'next/link';
import './pageDescription.css';

const PageDescription = ({
  title, titleIcon, goBack, button, children,
}) => (
  <div className="page-description">
    <div className="container-info">
      {goBack && (
      <Link href="/">
        <a className="back-button">
          <span className="arrow leftArrow" />
          Regresar
        </a>
      </Link>
      )}
      <div className="description-title">
        {titleIcon && (
        <img
          src={titleIcon}
          title="Description Icon"
          alt="Description Icon"
        />
        )}
        <h1>{title}</h1>
      </div>
      <div className="description-info">{children}</div>
      {button && (
      <Link href={button.path}>
        <button className="btn btn-medium description-button">
          {button.name}
        </button>
      </Link>
      )}
    </div>
  </div>
);

export default PageDescription;
