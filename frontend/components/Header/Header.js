import Link from 'next/link';
import Nav from './../Nav/Nav';
import './header.css';

const Header = () => {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-sm-3 col-12">
              <div className="logo">
                <Link href="/">
                  <a><img src="/logo.png" /></a>
                </Link>
              </div>
            </div>
            <div className="col-md-9 col-sm-9 col-12">
              <Nav />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;