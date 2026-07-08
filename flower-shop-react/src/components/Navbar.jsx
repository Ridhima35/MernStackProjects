import React from 'react';
import '../style/navbar.css'; // Import custom styles

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-3 sticky-top">
            <div className="container">
                {/* Brand Logo */}
                <a className="navbar-brand logo-text fs-3 text-success fw-bold" href="#">
                    🌸 Petal & Bloom
                </a>

                {/* Mobile Toggle Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Nav Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-medium">
                        <li className="nav-item px-2">
                            <a className="nav-link active text-success" href="#">Home</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#">Store</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>

                    {/* Right side icons */}
                    <div className="d-flex align-items-center gap-3">
                        {/* Search Icon */}
                        <a href="#" className="text-secondary fs-5 nav-icon-link">
                            <i className="fas fa-search"></i>
                        </a>

                        {/* Wishlist Icon */}
                        <a href="#" className="text-secondary fs-5 nav-icon-link position-relative">
                            <i className="bi bi-heart"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.6rem' }}>
                                0
                            </span>
                        </a>

                        {/* Cart Icon */}
                        <a href="#" className="text-secondary fs-5 nav-icon-link position-relative">
                            <i className="fas fa-shopping-basket"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success" style={{ fontSize: '0.6rem' }}>
                                3
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
