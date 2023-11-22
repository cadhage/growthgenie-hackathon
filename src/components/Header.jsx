import logo from "../assets/react.svg"
function Header() {
    return (
      <header className="bg-dark text-light py-3">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-3">
              <a href="/" className="text-light text-decoration-none">
                <img src={logo} alt="Logo" className="logo-img" /> Your Logo
              </a>
            </div>
            <div className="col-md-5">
              {/* Navigation */}
              <nav>
                <ul className="nav">
                  <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                </ul>
              </nav>
            </div>
            <div className="col-md-4 text-md-end mt-3 mt-md-0">
              {/* Login section for admin and client */}
              {/* Admin login */}
              <button className="btn btn-light me-2 d-block d-md-inline-block">Login as Admin</button>
              {/* Client login */}
              <button className="btn btn-light d-block d-md-inline-block">Login as Client</button>
            </div>
          </div>
        </div>
        <div className="mb-4"></div>
      </header>
    );
  }
  
  export default Header;
  