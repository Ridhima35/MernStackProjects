import React from 'react';

const ProductCard = ({ product, onSelect }) => {
  const productImage = product.image;

  // Calculate price after discount
  const hasDiscount = product.discount > 0;
  const originalPrice = product.price;
  const discountedPrice = hasDiscount
    ? Math.round(originalPrice * (1 - product.discount / 100))
    : originalPrice;

  return (
    <div className="col-lg-3 col-md-6">
      <div
        className="product-card h-100 d-flex flex-column justify-content-between bg-white shadow-sm rounded-3 position-relative"
        style={{ cursor: 'pointer' }}
        onClick={() => onSelect(product)}
      >
        {/* Discount Badge */}
        {hasDiscount && (
          <span className="badge bg-danger position-absolute top-0 start-0 m-3 px-3 py-2 rounded-pill shadow-sm" style={{ zIndex: 10 }}>
            {product.discount}% OFF
          </span>
        )}

        <div>
          {/* Product Image */}
          <div className="product-img-wrapper position-relative bg-light rounded-top-3 overflow-hidden" style={{ height: '200px' }}>
            <img
              src={productImage}
              className="w-100 h-100 object-fit-cover transition-scale"
              alt={product.name}
            />
          </div>

          {/* Product Information */}
          <div className="p-3 pb-0 text-center">
            <h6 className="fw-bold mb-2">{product.name}</h6>
          </div>
        </div>

        {/* Pricing and Basket Actions */}
        <div className="p-3 pt-0 text-center">
          <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
            {hasDiscount ? (
              <>
                <span className="fw-bold text-success fs-5">₹ {discountedPrice}</span>
                <span className="text-muted text-decoration-line-through small">₹ {originalPrice}</span>
              </>
            ) : (
              <span className="fw-bold text-success fs-5">₹ {originalPrice}</span>
            )}
          </div>

          <button
            className="btn btn-success btn-sm rounded-pill w-100 py-2 fw-bold"
            onClick={(e) => {
              e.stopPropagation(); // Prevents double-firing selection
              onSelect(product);
            }}
          >
            <i className="fas fa-shopping-basket me-2"></i>Add To Basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
