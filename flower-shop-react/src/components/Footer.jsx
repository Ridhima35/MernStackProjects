import React from 'react';
import { Link } from 'react-router-dom';
import '../style/footer.css';

function Footer() {
    return (
        <footer className="footer bg-white-custom py-5 mt-auto">
            <div className="container py-3">
                <div className="row g-4">
                    
                    {/* Column 1: Brand Info */}
                    <div className="col-md-5">
                        <h5 className="footer-brand mb-3">PETAL & BLOOM</h5>
                        <p className="footer-text lh-lg mb-4">
                            Premium luxury floral arrangements handcrafted by artisan florists. We deliver freshness, elegance, and happiness straight to your doorstep.
                        </p>
                        <div className="footer-socials d-flex gap-3">
                            <a href="#"><i className="bi bi-instagram"></i></a>
                            <a href="#"><i className="bi bi-facebook"></i></a>
                            <a href="#"><i className="bi bi-pinterest"></i></a>
                        </div>
                    </div>

                    {/* Column 2: Information Links */}
                    <div className="col-md-3 col-6">
                        <h6 className="footer-heading mb-3">Information</h6>
                        <ul className="list-unstyled footer-links">
                            <li className="mb-2"><Link to="/">Home</Link></li>
                            <li className="mb-2"><Link to="/collections">Collections</Link></li>
                            <li className="mb-2"><a href="#">Refund Policy</a></li>
                            <li className="mb-2"><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Details */}
                    <div className="col-md-4 col-6">
                        <h6 className="footer-heading mb-3">Contact Us</h6>
                        <p className="footer-text mb-2">
                            <strong>Email:</strong><br />
                            <a href="mailto:info@yourdomain.com" className="text-decoration-none footer-contact-link">info@yourdomain.com</a>
                        </p>
                        <p className="footer-text mb-0">
                            <strong>Call / Whatsapp:</strong><br />
                            <span className="text-muted">+91 XXXXXXXXXX</span>
                        </p>
                    </div>

                </div>

                {/* Bottom Copyright Bar */}
                <div className="footer-bottom border-top mt-5 pt-4 text-center">
                    <p className="footer-copyright mb-0">&copy; {new Date().getFullYear()} Petal & Bloom. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
