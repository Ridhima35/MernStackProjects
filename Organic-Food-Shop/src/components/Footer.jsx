const Footer = () => {
  return (
    <footer className="py-5 bg-dark text-white-50">
      <div className="container">
        <div className="row g-4 mb-4">
          <div className="col-lg-4 col-md-12 text-center text-lg-start">
            <h5 className="text-white fw-bold mb-3 d-flex align-items-center justify-content-center justify-content-lg-start">
              <i className="fas fa-leaf text-success me-2"></i>Organic Shop
            </h5>
            <p className="small mb-0 pe-lg-4">
              We source and deliver 100% certified organic foods straight from sustainable local farms to your home. Eat clean, support nature.
            </p>
          </div>
          
          <div className="col-lg-3 col-md-4 text-center text-md-start">
            <h6 className="text-white fw-bold uppercase-tracking text-success mb-3">Shop Categories</h6>
            <ul className="list-unstyled mb-0 d-flex flex-column gap-2 small">
              <li><a href="#store" className="text-white-50 text-decoration-none hover-white">Grains & Cereals</a></li>
              <li><a href="#store" className="text-white-50 text-decoration-none hover-white">Organic Dairy</a></li>
              <li><a href="#store" className="text-white-50 text-decoration-none hover-white">Snacks & Foods</a></li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-4 text-center text-md-start">
            <h6 className="text-white fw-bold uppercase-tracking text-success mb-3">Quick Links</h6>
            <ul className="list-unstyled mb-0 d-flex flex-column gap-2 small">
              <li><a href="#home" className="text-white-50 text-decoration-none hover-white">Home</a></li>
              <li><a href="#store" className="text-white-50 text-decoration-none hover-white">Explore Catalog</a></li>
              <li><a href="#cart" className="text-white-50 text-decoration-none hover-white">My Basket</a></li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-4 text-center text-md-start">
            <h6 className="text-white fw-bold uppercase-tracking text-success mb-3">Follow Us</h6>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start fs-5">
              <a href="#" className="text-white-50 hover-white" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-white-50 hover-white" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white-50 hover-white" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
        
        <hr className="border-secondary my-4" />
        
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small text-center">
          <p className="mb-0 mb-md-0">
            Copyright &copy; 2026 Organic Food Shop. All rights reserved.
          </p>
          <div className="d-flex gap-3 mt-2 mt-md-0">
            <a href="#" className="text-white-50 text-decoration-none hover-white">Privacy Policy</a>
            <span>&bull;</span>
            <a href="#" className="text-white-50 text-decoration-none hover-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
