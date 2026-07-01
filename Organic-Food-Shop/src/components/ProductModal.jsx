import React from 'react';

const ProductModal = ({ product, onClose, getProductImage }) => {
  if (!product) return null;

  const modalProductImage = getProductImage(product.image || product.img);
  const hasDiscount = product.discount > 0;
  const originalPrice = product.price;
  const discountedPrice = hasDiscount 
    ? Math.round(originalPrice * (1 - product.discount / 100)) 
    : originalPrice;

  return (
    <div className="product-modal-overlay" onClick={onClose}>
      <div className="product-modal-content card shadow-2xl border-0 p-4 p-md-5 rounded-4 bg-white" onClick={(e) => e.stopPropagation()}>
        <button className="btn-close position-absolute top-0 end-0 m-4" onClick={onClose} aria-label="Close"></button>
        
        <div className="row g-4 align-items-center">
          {/* Product Image */}
          <div className="col-md-6 text-center">
            <div className="p-3 bg-light rounded-4 overflow-hidden" style={{ maxHeight: '350px' }}>
              <img src={modalProductImage} className="img-fluid rounded-3 object-fit-contain" style={{ maxHeight: '300px' }} alt={product.name} />
            </div>
          </div>
          
          {/* Product Meta Details */}
          <div className="col-md-6">
            {product.brand && (
              <span className="text-success fw-bold uppercase-tracking text-sm d-block mb-1">{product.brand}</span>
            )}
            <h3 className="fw-bold mb-2 text-dark">{product.name}</h3>
            
            {/* Organic Badge */}
            <span className="badge bg-success-subtle text-success border border-success-subtle px-3 py-2 rounded-pill mb-3 d-inline-block">
              <i className="fas fa-leaf me-1"></i> 100% Certified Organic
            </span>

            {/* Price */}
            <div className="d-flex align-items-center gap-3 mb-3">
              {hasDiscount ? (
                <>
                  <h4 className="fw-bold text-success mb-0">₹ {discountedPrice}</h4>
                  <span className="text-muted text-decoration-line-through fs-5">₹ {originalPrice}</span>
                  <span className="badge bg-danger rounded-pill">{product.discount}% OFF</span>
                </>
              ) : (
                <h4 className="fw-bold text-success mb-0">₹ {originalPrice}</h4>
              )}
            </div>

            {/* Description */}
            <p className="text-muted mb-4">{product.description || "Pure and natural organic food product harvested with care, containing premium nutritional properties."}</p>

            <hr className="my-3 text-muted" />

            {/* Specifications */}
            <div className="row mb-4">
              <div className="col-6">
                <span className="text-muted small d-block">Pack Size</span>
                <strong className="text-dark">500 grams / 1 kg (Standard)</strong>
              </div>
              <div className="col-6">
                <span className="text-muted small d-block">Expiry Info</span>
                <strong className="text-dark">Best before 12 months</strong>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="d-grid gap-2 d-md-flex">
              <button className="btn btn-success rounded-pill px-4 py-2.5 fw-bold flex-grow-1">
                <i className="fas fa-shopping-basket me-2"></i>Add to Basket
              </button>
              <button className="btn btn-warning text-white rounded-pill px-4 py-2.5 fw-bold flex-grow-1">
                <i className="fas fa-bolt me-2"></i>Buy It Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
