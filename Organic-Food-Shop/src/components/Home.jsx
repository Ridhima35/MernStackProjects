import heroImg from '../assets/images/hero.jpg';

const Home = () => {
  return (
    <section className="main" id="home">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="row align-items-center">
          <div className="col-lg-6 pt-lg-0 pt-5 text-lg-start text-center">
            <span className="badge bg-success-light text-success fw-bold px-3 py-2 rounded-pill mb-3 uppercase-tracking">
              100% Organic Certified
            </span>
            <h1>Nature has always cared for us!</h1>
            <p className="lead text-muted mb-4 fs-5">
              Discover clean, farm-fresh ingredients grown with care and delivered straight to your doorstep. Live healthy, eat organic.
            </p>
            <div className="d-flex flex-sm-row flex-column gap-3 justify-content-lg-start justify-content-center">
              <a href="#store" className="btn1 text-decoration-none text-center">Explore Store</a>
              <button className="btn btn-outline-success btn-lg rounded-pill px-4 py-3 fw-bold">More Tips</button>
            </div>
          </div>
          <div className="col-lg-6 mt-lg-0 mt-5 d-flex justify-content-center">
            <div className="hero-img-wrapper" style={{ width: '80%', aspectRatio: '1/1' }}>
              <img 
                src={heroImg} 
                className="img-fluid w-100 h-100" 
                style={{ objectFit: 'cover' }} 
                alt="Organic Farming Background" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
