import { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import ProductModal from './ProductModal';
import ProductCard from './ProductCard';

// Import local images from assets
import quinoaImg from '../assets/images/quinoa.jpg';
import gheeImg from '../assets/images/ghee.jpg';
import honeyImg from '../assets/images/honey.jpg';
import chiaImg from '../assets/images/chia_seeds.jpg';
import acvImg from '../assets/images/acv.jpg';
import coconutImg from '../assets/images/coconut_oil.jpg';
import teaImg from '../assets/images/green_tea.jpg';
import almondImg from '../assets/images/almonds.jpg';
import saltImg from '../assets/images/pink_salt.jpg';
import riceImg from '../assets/images/brown_rice.jpg';

// Map database image filenames exactly to their corresponding local assets or online fallbacks
const imageMap = {
  // Local assets
  'honey.jpg': honeyImg,
  'ghee.jpg': gheeImg,
  'chia_seeds.jpg': chiaImg,
  'acv.jpg': acvImg,
  'coconut_oil.jpg': coconutImg,
  'green_tea.jpg': teaImg,
  'quinoa.jpg': quinoaImg,
  'almonds.jpg': almondImg,
  'pink_salt.jpg': saltImg,
  'brown_rice.jpg': riceImg,
};

const Store = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Search, filter, and pagination states
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  // Categories matching the products in products.json
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'Spreads', name: 'Spreads' },
    { id: 'Seeds & Nuts', name: 'Seeds & Nuts' },
    { id: 'Grains', name: 'Grains' },
    { id: 'Beverages', name: 'Beverages' },
    { id: 'Natural', name: 'Natural' },
    { id: 'Spices', name: 'Spices' },
    { id: 'Oils & Ghee', name: 'Oils & Ghee' }
  ];

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const apiData = await fetchProducts({
        page: currentPage,
        limit: 6,
        category: category !== 'all' ? category : '',
        search: search
      });

      if (apiData) {
        setProducts(apiData.products || []);
        setTotalPages(apiData.pages || 1);
      } else {
        setProducts([]);
        setTotalPages(1);
      }
      setLoading(false);
    };

    // Use a small delay for search input to prevent sending requests on every keystroke
    const delayDebounce = setTimeout(() => {
      loadProducts();
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [currentPage, category, search]);

  // Reset page when search or category changes
  const handleCategoryChange = (catId) => {
    setCategory(catId);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  // Resolves whether to use local asset or fallback external URL
  const getProductImage = (imageField) => {
    if (!imageField) return '';

    // Extract filename if a path is given (e.g. "images/ghee.jpg" -> "ghee.jpg")
    const filename = imageField.split('/').pop();

    return imageMap[filename] || imageField;
  };

  return (
    <section className="shop py-5 bg-white" id="store">
      <div className="container py-4">
        <div className="card shadow-lg border-0 p-4 p-md-5 rounded-4 bg-light">
          <div className="row mb-5">
            <div className="col-lg-8 m-auto text-center">
              <span className="text-success fw-bold uppercase-tracking">Explore Catalog</span>
              <h1 className="fw-bold mt-2">Explore Our Store</h1>
              <h6 className="text-danger fw-semibold">Pick Your Product From Our Store</h6>
            </div>
          </div>

          {/* Search and Category Filter Section */}
          <div className="row mb-4 g-3 align-items-center justify-content-between">
            <div className="col-md-4">
              <div className="input-group shadow-sm">
                <span className="input-group-text bg-white border-end-0 text-muted">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control border-start-0 py-2"
                  placeholder="Search products..."
                  value={search}
                  onChange={handleSearchChange}
                />
              </div>
            </div>

            <div className="col-md-8 text-md-end">
              <div className="d-flex flex-wrap gap-2 justify-content-md-end">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`btn rounded-pill px-3 py-1.5 fw-semibold shadow-sm transition-all ${category === cat.id
                      ? 'btn-success text-white'
                      : 'btn-outline-success bg-white text-success'
                      }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : products.length > 0 ? (
            <>
              <div className="row g-4">
                {products.map((product) => (
                  <ProductCard
                    key={product._id || product.id}
                    product={product}
                    onSelect={setSelectedProduct}
                    getProductImage={getProductImage}
                  />
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="d-flex justify-content-center align-items-center mt-5 gap-3">
                  <button
                    className="btn btn-outline-success px-4 py-2 rounded-pill shadow-sm"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  >
                    <i className="bi bi-arrow-left me-2"></i> Previous
                  </button>
                  <span className="fw-semibold text-muted">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    className="btn btn-outline-success px-4 py-2 rounded-pill shadow-sm"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  >
                    Next <i className="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-5 card border-0 bg-white shadow-sm rounded-4">
              <i className="bi bi-emoji-frown text-success fs-1 mb-2"></i>
              <h5 className="fw-bold">No products found</h5>
              <p className="text-muted">Try adjusting your filters or search term.</p>
            </div>
          )}
        </div>
      </div>

      {/* Product Detail Modal Component */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        getProductImage={getProductImage}
      />
    </section>
  );
};

export default Store;
