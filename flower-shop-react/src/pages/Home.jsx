import React from 'react';
import '../style/home.css';

function Home() {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-8 col-sm-12 animate-fade-in-up">
                            <span className="hero-subtitle mb-2 d-inline-block">Fresh & Hand-picked</span>
                            <h1 className="hero-title mb-4">
                                Blooming Happiness Delivered to Your Doorstep
                            </h1>
                            <p className="lead hero-desc mb-5 delay-1">
                                Experience the joy of giving and receiving the freshest premium flowers handcrafted by local expert florists for every unique occasion.
                            </p>
                            <div className="d-flex gap-3 delay-2">
                                <button className="btn btn-success btn-lg px-4 py-3 fw-bold rounded-pill">
                                    Shop Now
                                </button>
                                <button className="btn btn-outline-success btn-lg px-4 py-3 fw-bold rounded-pill bg-white text-success">
                                    Explore Collections
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
