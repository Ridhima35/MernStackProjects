import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import '../style/navbar.css'; // Import custom styles

function Navbar() {
    const [currency, setCurrency] = useState('INR');

    return (
        <nav className="navbar-custom bg-white border-bottom sticky-top">
            {/* Row 1: Top Bar (Currency | Logo | Faccount & Actions) */}
            <div className="navbar-top-row py-3">
                <div className="container d-flex justify-content-between align-items-center">

                    {/* Left: Currency Dropdown Selector */}
                    <div className="currency-selector">
                        <select
                            className="form-select form-select-sm border-0 bg-light text-muted fw-semibold"
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            style={{ width: '85px', cursor: 'pointer' }}
                        >
                            <option value="INR">INR</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                        </select>
                    </div>

                    {/* Center: Brand Logo */}
                    <div className="logo-container text-center">
                        <Link className="logo-text text-decoration-none" href="#">
                            PETAL & BLOOM
                        </Link>
                    </div>

                    {/* Right Side: Faccount, Search, Cart */}
                    <div className="d-flex align-items-center gap-4">
                        {/* Faccount */}
                        <a href="#" className="text-secondary text-decoration-none fw-medium d-flex align-items-center gap-1 nav-icon-link">
                            <i className="bi bi-person-circle fs-5"></i>

                        </a>

                        {/* Search Icon */}
                        <a href="#" className="text-secondary fs-5 nav-icon-link text-decoration-none">
                            <i className="fas fa-search"></i>
                        </a>

                        {/* Cart Icon */}
                        <a href="#" className="text-secondary fs-5 nav-icon-link position-relative text-decoration-none">
                            <i className="fas fa-shopping-basket"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success" style={{ fontSize: '0.6rem' }}>
                                3
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Row 2: Navigation Links & Categories */}
            <div className="navbar-bottom-row py-2 bg-white">
                <div className="container">
                    <ul className="nav justify-content-center fw-medium gap-3 gap-md-4">
                        <li className="nav-item">
                            <Link className="nav-link text-dark px-2" to="/collections">Shop By Collections</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-success px-2 active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark px-2" to="/Occasions">Shop By Occasions</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark px-2" to="/decor">Floral Decor</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark px-2 d-flex align-items-center gap-1" to="/city">Choose Your City</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
