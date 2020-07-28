import Router from 'next/router';
import './pageDescription.css';

const handleBack = () => Router.back();

const PageDescription = ({title,titleIcon,goBack,children}) => {
  return(
    <div className="page-description">
      <div className="container-info">
        {goBack && 
          <a className="back-button" onClick={handleBack}>
            <span className="arrow leftArrow"></span>Regresar
          </a>}
        <div className="description-title">
          {titleIcon && <img src={titleIcon}/>}
          <h1>{title}</h1>
        </div>
        <div className="description-info">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageDescription;