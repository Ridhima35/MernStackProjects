import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top py-3 bg-white shadow-sm border-bottom">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center fw-bold text-success fs-4" to="/">
          <i className="fas fa-leaf me-2 text-success bounce-icon"></i>
          <span style={{ letterSpacing: '0.5px' }}>Organic <span className="text-dark">Shop</span></span>
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center gap-4 me-4">
            <li className="nav-item">
              <Link className="nav-link active fw-semibold text-success hover-underline" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold text-success hover-underline" to="/store">Store</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link position-relative d-flex align-items-center gap-1" href="#cart" aria-label="Shopping Cart">
                <i className="fas fa-shopping-basket fs-5 text-success"></i>
                <span className="fw-semibold text-dark d-none d-lg-inline">Basket</span>
                <span className="badge rounded-pill bg-danger ms-1" style={{ fontSize: '0.75rem' }}>
                  0
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
